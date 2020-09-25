import React from 'react';
import Button from 'react-bootstrap/Button'

import "../Styles/Menus.css";

const Private=() => {
    return (
        <div className="Menus" id="private">
            <div class="left_content col">
                <img src="/images/private_dining.jpg" />
                <img src="/images/QCH_8.jpg" />
            </div>
            <div class="right_content col">
                <center><h1>PRIVATE ROOM</h1></center>
                <h6>Private Dining In These Strange Times….</h6>
                <p>Our Private Dining Room is open and bookable but somewhat modified in order for us to ensure we follow current government guidelines on group socialising.</p>
                <p>From re-opening until the end of August, our private room can be booked provided, as stated in current government guidelines, that each reservation is either no more than 6 guests or from no more than two households.</p>
                <p>Should you be interested in booking in the Private Dining Room for a date beyond August, we are working in the hope that restrictions may, by then, be more lenient and reservations can be made for up to 16 guests from any number of households you wish! (of course should things not have changed by then, we will of course be able to modify or cancel your booking should you wish).</p>
                <p>In the meantime, we hope that our private room and its offer of secluded and separate dining is just the thing you might be looking for as we take our steps back into eating and drinking with the people we love…</p>
                <h5>Our offer</h5>
                <p>In our Private Room, you will have one waiter who looks after you throughout the duration of your meal.</p>
                <p>We only offer our ‘Feasting Menu’ (see sample <a href="https://thequalitychophouse.com/wp-content/uploads/2020/08/QCH-MENU-FEASTING-1.pdf">here</a>) at £54 per head and it can be modified to suit all dietary requirements.</p>
                <p>Our Wine List and Magnum List are available to choose from in advance and our head of Guest Relations will be in touch as soon as you have booked your lunch or dinner to discuss how we can make the event most bespoke or ‘contact-free’ to suit your requirements.</p>

                <Button href="info@thequalitychophouse.com" target="_blank" variant="outline-dark" className="button">MAKE AN ENQUIRY</Button>
            </div>
        </div>
    )
}

export default Private;