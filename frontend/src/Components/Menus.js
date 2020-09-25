import React from 'react';
import Button from 'react-bootstrap/Button'

import "../Styles/Menus.css";

const Menus=() => {
    return (
        <div className="Menus" id="menu">
            <div class="left_content col">
                <img src="/images/QCH_3.jpg" />
            </div>
            <div class="right_content col">
                <center><h1>MENUS</h1></center>
                <p>Our sample menus are below.</p>
                <p>At lunch a set menu is available for £24 for 2 courses and £28 for 3 courses as well as a full a la carte menu. At dinner, we offer an a la carte menu.</p>
                <p>We always have a chop available and usually a large steak as a supplement – let us know when booking if you would like anything prepared from our butcher.</p>
                <p>Our Sunday menu is £35 for 3 courses, and always includes a splendid selection of Sunday roasts.</p>
                <p>As well as our main wine list we also always have a ‘Cellar List’ of special single bottles from the cellar.
                </p><br/>
                <div className="buttons">
                    <Button href="https://thequalitychophouse.com/wp-content/uploads/2020/09/SET-LUNCH-MENU-QCH.pdf" target="_blank" variant="outline-dark" className="button">SET LUNCH MENU</Button><br/>
                    <Button href="https://thequalitychophouse.com/wp-content/uploads/2020/09/24092020ALACARTE.pdf" target="_blank" variant="outline-dark" className="button">A LA CARTE MENU</Button><br/>
                    <Button href="https://thequalitychophouse.com/wp-content/uploads/2020/09/16092020-DESSERT.pdf" target="_blank" variant="outline-dark" className="button">DESSERT MENU</Button><br/>
                    <Button href="https://thequalitychophouse.com/wp-content/uploads/2020/09/16092020-FEASTING.pdf" target="_blank" variant="outline-dark" className="button">FEASTING MENU</Button><br/>
                    <Button href="https://thequalitychophouse.com/wp-content/uploads/2020/09/20092020SUNDAY.pdf" target="_blank" variant="outline-dark" className="button">SUNDAY MENU</Button><br/>
                    <Button href="https://thequalitychophouse.com/wp-content/uploads/2020/09/18092020-DRINKS.pdf" target="_blank" variant="outline-dark" className="button">DRINKS</Button><br/>
                    <Button href="https://thequalitychophouse.com/wp-content/uploads/2020/08/29082020-CELLAR.pdf" target="_blank" variant="outline-dark" className="button">CELLAR LIST</Button><br/>
                </div>
            </div>
        </div>
    )
}

export default Menus;