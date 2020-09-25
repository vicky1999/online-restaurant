import React from 'react';
import Button from 'react-bootstrap/Button'

import "../Styles/Menus.css";

const Bookings=() => {
    return (
        <div className="Menus" id="bookings">
            <div class="left_content col">
                <img src="/images/QCH_6.jpg" />
            </div>
            <div class="right_content col">
                <center><h1>BOOKINGS</h1></center>
                <p>Bookings are currently available from the 14th of July.</p>
                <p>We are currently not accepting cash as payment. We accept all major credit cards and contactless payment.</p>
                <p>There may be some instances where tables of 4-6 will be accommodated in our upstairs private dining room in order to facilitate social distancing. Should this be the case then we very much hope that you enjoy the relaxed and airy atmosphere of this beautiful room. But equally please do let us know if you have a preference for dining in one of our restaurant booths.</p>
                <h5>Large Parties</h5>
                <p>For larger parties we have a private room that can accommodate up to 16 guests.  Please see the ‘Private Room’ page for more details, and to book.</p>
                <Button href="https://www.opentable.co.uk/restref/client?rid=96150&restref=96150&r3uid=ndAXq9lH6&ot_source=Restaurant+website" target="_blank" variant="danger" className="button">Book Now</Button><br/>
                <img src="/images/opentable.png" width={100} height={30}/>
            </div>
        </div>
    )
}

export default Bookings;