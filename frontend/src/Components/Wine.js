import React from 'react';
import {Button} from 'react-bootstrap';

import '../Styles/Makings.css';

const Wine=() => {
    return (
        <div id="wine" className="Making">
            
            <div className="left">
                <h1>WINE</h1>
                <p>A more recent addition to the shop has been Quality Wines which stocks an eclectic array of bottles to suit a broad range of tastes and budgets.</p>
                <p>A small selection of these are now available for delivery however, if you have any special requests then please do feel free to send us a message and we'll see what we can line up.</p>
                <p>The wine bar itself is open from Wednesday to Saturday nights with an ever-changing menu of small and larger plates.</p>
                <Button href="http://qualitywinesfarringdon.com/" target="_blank" variant="outline-dark" className="button">BOOK A TABLE AT QUALITY WINES</Button><br/>
            </div>
            <div className="right"> 
                <img src="/images/shop_3.jpg" alt="Pie" className="right-img" />
            </div>
        </div>
    )
}

export default Wine;