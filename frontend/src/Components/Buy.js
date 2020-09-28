import React, {useState} from 'react';
import {Button} from 'react-bootstrap';

import PayPal from './PayPal';
import '../Styles/Buy.css';

const Buy = (props) => {
    return (
        <div className="Buy">
            <div className="title">
                 <h2>Buy Now</h2>
            </div>
            <div className="product">
                 <h4 className="product-name">{localStorage.getItem("name")}</h4>
                 <p>{localStorage.getItem("description")}</p>
                 <p> &euro; {localStorage.getItem("price")}</p>
                 <PayPal />
            </div>
        </div> 
    )    
}

export default Buy;