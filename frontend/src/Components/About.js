import React from 'react';
import "../Styles/About.css";

const About=() => {
    return (
        <div className="About">
            <div className="about_image col">
                <img src="/images/QCH_9.jpg" alt="Image" />
            </div>
            <div class="about_text col">
                <center><img src="/images/logo_1.png" className="about_logo" /></center>
                <p>The Quality Chop House celebrated its 150th anniversary in 2019.</p>

                <p>We are hugely proud and humbled to be the custodians of this institution – although its history isn’t leant on too much. Our menu is contemporary whilst simultaneously respectful to and proud of the site’s ‘meaty’ past – in fact, we even opened a butcher’s next door!</p>

                <p>Our head chef Shaun Searley has been on the pass since day 1 of QCH’s current incarnation in 2012 and is passionate about working with the best suppliers we can find in the British Isles – a passion which spills through onto the shelves our next door shop and butcher. Next door we also have a wine bar and wine shop – a natural progression from our obsession with wine which manifests itself on our award-winning wine list run by our co-director James Fryer. You will also find a blackboard of that month’s fine wine cellar finds at very reasonable prices.</p>

                <p>We love running this unique restaurant (yes, even those Grade-II listed benches…) and are honoured it is so often chosen by our guests as the spot to celebrate something special – should this be the case please don’t hesitate to let us know when making the reservation.</p>

                <p>We hope to see you here soon,</p>
                <p>Will Lander & Daniel Morgenthau <br/>Owners</p>
                <center>
                    <b><h4>HOURS</h4></b>
                    Tuesday to Saturday : Lunch – 12-2.30pm | Dinner: 6-10pm<br/>
                    Sunday : Lunch – 12-3.30pm
                </center>
            </div>
        </div>
    )
}

export default About;