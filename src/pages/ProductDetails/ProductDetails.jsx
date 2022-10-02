import './ProductDetails.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export const ProductDetails = ({setNotify}) => {

    const { productId } = useParams();

    const [product, setProduct] = useState({});

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(`https://api-generator.retool.com/dlCIKT/data/${productId}`)
                setProduct(data)
            } catch (err) {
                console.log(err);
            }
        })()
    }, []);

    return (
        <div className='productDetails-body d-flex justify-content-center'>
            <div class="card" style={{ width: '80%' }}>
                <div className='addBtn d-flex justify-content-between'>
                    <button
                        onClick={() => setNotify(true)}
                        className='m-2 '>Add To Cart</button>

                    <button
                        onClick={() => setNotify(true)}
                        className='m-2'>Add To Wishlist </button>
                </div>
                <div className='productImg-container'>
                    <img src={product?.G} class="card-img-top productImg" alt="card-ig" />
                </div>
                <div class="card-body">
                    <h5 class="card-title">Name: {product['FOOD NAME']}</h5>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Category: {product['SUB GROUP']}</li>
                    <li class="list-group-item">Scientific Name: {product['SCIENTIFIC NAME']}</li>
                    <li class="list-group-item">{product.col1 ? 'In Stock' : 'Out Of Stock'}</li>
                    <li class="list-group-item">{product.F ? 'Fast Delivery' : 'No Fast Delivery'}</li>
                </ul>
            </div>
        </div>
    )
};