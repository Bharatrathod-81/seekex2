import './Header.css';
import React from 'react'

export const Header = ({ setFilterData, setSideBarBtn }) => {
    
    return (
        <div className="card header-body ">
            <div className="card-body d-flex justify-content-between">
                <div
                onClick={() => setSideBarBtn(p => !p)} 
                ><i className="fa fa-bars" style={{ fontSize: '24px' }}></i></div>
                <div className='input-container d-flex justify-content-centre'>
                    <div className="input-group ">
                        <div className="input-group input-group-sm">
                            <input 
                            onChange={e => setFilterData([e.target.value])}
                            type="text" 
                            className="form-control" 
                            aria-label="Sizing example input"
                             aria-describedby="inputGroup-sizing-sm" />
                        </div>
                    </div>
                </div>
                <div className='right-side-header d-flex justify-content-between'>
                    <i className="fa fa-heart" style={{ fontSize: '24px' }}></i>
                    <i className="fa fa-shopping-cart" style={{ fontSize: '24px' }}></i>
                </div>
            </div>
        </div>
    )
}; 