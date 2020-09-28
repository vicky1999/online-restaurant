import React from 'react';
import {Button} from 'react-bootstrap';

import '../Styles/Makings.css';

const Questions=() => {
    return (
        <div id="wine" className="Making">
            
            <div className="left">
                <h1>QUESTIONS ?</h1>
                <p>Wether you have an extra special request, a question about delivery times or just want advice on gettng the perfect crisp on your confit potatoes, we're always more than happy to help out.</p>
                <p>We have collected the answers to some more common questions in our help centre however, please do feel free to get in touch if you can't find the answer you're looking for.</p>
                <p>You can email us at <a href="mailto:hello@thequalitychophouse.com">hello@thequalitychophouse.com</a></p>
            </div>
            <div className="right"> 
                <img src="/images/Shop_4.jpg" alt="Questions" className="right-img" />
            </div>
        </div>
    )
}

export default Questions;