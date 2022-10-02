import './CardView.css';
import React from 'react'
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";

export const CardView = ({ data, setNotify }) => {
    return (
        <Link to={`/Product-Details/${data.id}`}>
            <div className="card" style={{ width: '18rem' }}>
                <div className='addBtn d-flex justify-content-between'>
                    <button onClick={() => setNotify(true)}
                        className='m-2 '>Add To Cart</button>
                    <button
                        onClick={() => setNotify(true)}
                        className='m-2'>Add To Wishlist </button>
                </div>
                <img src={data.G} className="card-img-top" alt="card-img" />
                <div className="card-body">
                    <p className="card-text">{data['FOOD NAME']}</p>
                </div>
            </div>
        </Link>
    )
};