import './SideBar.css';
import React, { useEffect, useState } from 'react';
import axios from 'axios';


export const SideBar = ({ setFilterData, sideBarBtn }) => {

    const [Data, setData] = useState([]);
    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get('https://api-generator.retool.com/dlCIKT/data');
                const categoryArr = data.reduce((acc, curr) => acc.includes(curr['GROUP']) ? acc : [...acc, curr['GROUP']], []);
                setData(categoryArr);
            } catch (err) {
                console.log(err);
            }
        })()
    }, []);


    return (
        <div className='main-sideBar-body'>
            <div className='sideBar-body'>
                <div>
                    <h5>Category</h5>
                    {Data?.map(e =>
                        <div
                            onClick={() => setFilterData(e)}
                            className='category'>{e}</div>
                    )}
                    <h5>Filter</h5>
                    <div
                        onClick={() => setFilterData('col1')}
                        className='category'>In Stock</div>
                    <div
                        onClick={() => setFilterData('F')}
                        className='category'>Fast Delivery</div>
                </div>
            </div>
            {sideBarBtn &&
                <div className='second-sideBar'>
                    <div>
                        <h5>Category</h5>
                        {Data?.map(e =>
                            <div
                                onClick={() => setFilterData(e)}
                                className='category'>{e}</div>
                        )}
                        <h5>Filter</h5>
                        <div
                            onClick={() => setFilterData('col1')}
                            className='category'>In Stock</div>
                        <div
                            onClick={() => setFilterData('F')}
                            className='category'>Fast Delivery</div>
                    </div>
                </div>}
        </div>
    )
};