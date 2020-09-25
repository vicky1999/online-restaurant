import React from 'react';
import Button from 'react-bootstrap/Button'

import "../Styles/Menus.css";

const WellBeing=() => {
    return (
        <div className="Menus" id="wellbeing">
            <div class="left_content col">
                <img src="/images/QCH_2.jpg" />
            </div>
            <div class="right_content col">
                <center><h1>YOUR WELLBEING</h1></center>
                <h5>How we are making our dining rooms safe</h5>
                <p>We have taken the following steps, above and beyond the 1 metre gap between tables and all other government guidance, to ensure you can feel as relaxed as possible while dining with us.</p>
                <p>1. Masks – all our Front of House staff wear masks</p>
                <p>2. Air filtration – all our dining rooms have been fitted with brand new IQAir air purifiers equipped with a hospital-grade <a href="https://www.allergycosmos.co.uk/media/pdf/iqair-covid-19.pdf">HyperHEPA filters.</a></p>
                <p>3. Air flow – our front doors in all dining rooms will be open all day allowing for maximum circulation of fresh air. All our dining rooms are additionally fitted with a ‘fresh air’ air conditioning system.</p>
                <p>4. Your table – your table will be set, prior to your arrival, by colleagues wearing disposable gloves and your menus will already be on the table ready for you.</p>
                <p>5. Staff wellbeing – we take and record the temperatures of all our colleagues before each service.</p>
                <p>6. ‘Contact-free dining’ – we are aware that for lots of reasons, each of our guests will have a different view on the level of interaction they would like with our teams during this unique period. For those who want to keep this to an absolute minimum we can offer ‘contact-free dining’ whereby your table will be set with everything you might need for your lunch or dinner and nothing, other than your dishes from the kitchen will be touched by anyone other than you. To find out about options for pre-ordering with contact-free dining please email the restaurant.</p>
                <p>We appreciate some of this may seem to jar with the informal but professional hospitality we have always tried to define ourselves by. However, we feel the first step has to be to make our guests and our teams feel as safe as possible. With this achieved, our guests can see our restaurants as a place to relax and enjoy the type of hospitality and escapism that restaurants should always offer but have been unable to over the last few months.</p>
            </div>
        </div>
    )
}

export default WellBeing;