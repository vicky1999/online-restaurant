import React from 'react';
import {Button} from 'react-bootstrap';


import '../Styles/Makings.css';

const MadeByUs=() => {
    return (
        <div id="made-by-us" className="Making">
            <div className="left">
                <h1>MADE BY US</h1>
                <p>The Quality Chop House first opened its doors in 1869 and - to this day - continues to serve its community with fine British fare.</p>
                <p>Our shop (located next door) opened in 2013. Here you can find many of our house specialities ready to bundle up and cook at home.</p>
                <p>We deal in comfort food: crispy confit potatoes, decadent beef mince, crust crumbling pork pies and many more are now available online alongside a selection of cuts from our very own in-house butchery.</p>
            </div>
            <div className="right"> 
                <img src="/images/Shop_1.webp" alt="Pie" className="right-img" />
            </div>
            <div className="right"> 
                <img src="/images/Shop_5.webp" alt="Pie" className="right-img" />
            </div>
            <div className="left">
                <h1>READY-TO-HEAT MEALS</h1>
                <p>Give Deliveroo a miss for once and try one of our ready to heat meals. There's a seasonal selection of stews and braises for one that are totally delicious and insanely easy to prepare.</p>
                <center><Button variant="outline-dark">SEE THE RANGE</Button></center>
            </div>
        </div>
    )
}

export default MadeByUs;