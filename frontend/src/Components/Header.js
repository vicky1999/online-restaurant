import React,{Component} from 'react';
import '../Styles/Header.css';

import {Navbar,Nav} from 'react-bootstrap';

const Header=() => {
    return (
        <div className="Header">
            {/* <div className="logo">
                <img src="/images/logo.png" alt="logo" />
            </div>
            <div className="links">
                <a href="#menu">MENUS</a>
                <a href="#bookings">BOOKINGS</a>
                <a href="#private">PRIVATE DINING</a>
                <a href="#wellbeing">YOUR WELLBEING</a>
                <a href="#contact">CONTACT</a>
                <a href="#vouchers">VOUCHERS</a>
                <a href="#shop">OUR SHOP</a>
                <a href="#group">OUR GROUP</a>
            </div> */}
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
                        <Nav.Link href="#shop">OUR SHOP</Nav.Link>
                        <Nav.Link href="#group">OUR GROUP</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;