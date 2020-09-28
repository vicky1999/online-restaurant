import React from 'react';

import '../Styles/Makings.css';

const MadeByOthers=() => {
    return (
        <div id="made-by-others" className="Making">
            
            <div className="left">
                <h1>MADE BY OTHERS</h1>
                <p>Alongside to our own house-made goods, we also carefully source a range of high quality produce and products from both near and afar.</p>
                <p>Our shop shelves are always brimming with incredible ingredients, enticing snacks and the freshest of produce. A selection of which we now offer for delivery.</p>
                <p>Of course, if there's anything in particular that you're after and cannot find here then please do be in touch via email.</p>
                
            </div>
            <div className="right"> 
                <img src="/images/Shop_2.webp" alt="Pie" className="right-img" />
            </div>
        </div>
    )
}

export default MadeByOthers;