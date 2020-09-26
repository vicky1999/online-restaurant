import React,{Component} from 'react';
import '../Styles/Header.css';

import {Navbar,Nav} from 'react-bootstrap';

const Header=() => {
    return (
        <div className="Header">
            <Navbar sticky="top" expand="lg" className="navigation">
                <Navbar.Brand href="#home" className="logo">
                    <img src="/images/logo.png" alt="logo" />
                    <div className="name">The Quality Chop House</div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggler"/>
                <Navbar.Collapse id="responsive-navbar-nav"  >
                    <Nav className="mr-auto justify-content-end nav links" justify="true">
                        <Nav.Link href="#menu">MENUS</Nav.Link>
                        <Nav.Link href="#bookings">BOOKINGS</Nav.Link>
                        <Nav.Link href="#private">PRIVATE DINING</Nav.Link>
                        <Nav.Link href="#wellbeing">YOUR WELLBEING</Nav.Link>
                        <Nav.Link href="#contact">CONTACT</Nav.Link>
                        <Nav.Link href="#vouchers">VOUCHERS</Nav.Link>
                        <Nav.Link href="/shop" target="_blank">OUR SHOP</Nav.Link>
                        <Nav.Link href="https://www.woodheadrestaurantgroup.co.uk/" target="_blank">OUR GROUP</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;