import React from 'react';
import {TextField} from '@material-ui/core';
import { Button } from 'react-bootstrap';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import PaymentIcon from '@material-ui/icons/Payment';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

import '../Styles/ShopFooter.css';

const ShopFooter = () => {
    return (
        <div className="Footer">
            <div className="ShopFooter">
                <div className="item">
                    <h2>The QCH Shop</h2><br/>
                    <p>Open 7 days 9am-6pm | 94 Farringdon Rd | 020 3602 8115</p>
                </div>
                <div className="item">
                    <h2>Quick links</h2>
                    <div className="policies">
                        <a href="#">Privacy Policy</a><br/>
                        <a href="#">Refund Policy</a><br/>
                        <a href="#">Terms of Service</a><br/>
                    </div>
                </div>
                <div className="item"><br/>
                    <h2>Newsletter</h2>
                    <TextField label="Email address" className="mail"/><br/><br/>
                    <Button href="/shop" target="_blank" variant="outline-dark" className="subscribe" >SUBSCRIBE</Button>
                </div>
            </div>
            <div className="social">
                <div >
                    <FacebookIcon className="social-icon"/>
                    <TwitterIcon className="social-icon"/>
                    <InstagramIcon className="social-icon"/>
                    <p className="copyright">&copy; 2020, The Quality Chop House Shop Powered by Shopify</p>
                </div>
                <div >
                    <AccountBalanceIcon />
                    <PaymentIcon /><br/>
                </div>
            </div>
        </div>
    )
}

export default ShopFooter;