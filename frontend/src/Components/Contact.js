import React from 'react';
import Button from 'react-bootstrap/Button'

import "../Styles/Menus.css";

const Contact=() => {
    return (
        <div className="Menus" id="contact">
            <div className="left_content col">
                <img src="/images/contact.jpg" />
            </div>
            <div className="right_content col">
                <h1>CONTACT</h1>
                <h5>The Quality Chop House</h5>
                <p>88-94 Farringdon Rd.<br/>
                    London, EC1R 3EA<br/>
                    Tel: 020 7278 1452<br/>
                    Email: info@thequalitychophouse.com<br/>
                    Instagram: @qualitychop
                </p>
                <h5>Careers</h5>
                <p>We are always on the lookout for talented hospitality professionals to join our growing team.<br/>
                Please send your CV to careers@thequalitychophouse.com</p>
                <p>Photos by <a href="https://www.andrewmontgomery.co.uk/" target="_blank">Andrew Montgomery</a></p>
            </div>
        </div>
    )
}

export default Contact;