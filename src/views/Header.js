import React, { useEffect, useState } from 'react';

import Container from 'react-bootstrap/Container';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Constants from "../Components/UiKit/Constants"
import MobileMenu from './MobileMenu';



const Header = () => {
    const [activeLink, setActiveLink] = useState('Home');
    const [activeButton, setActiveButton] = useState("Login");

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    const handleNavLinkClick = (linkName) => {
        setActiveLink(linkName);
        sessionStorage.setItem('activeLink', linkName);
    };


    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/ecofriendly?scrollTo=nonSmokingHospital');
    };

    const handleRedirectionClick = (path, e) => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate(path);
    }

    const eventNavigate = () => {
        navigate("/events")
    }

    const handleClickForChild = (path, e) => {
        e.stopPropagation();
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        navigate(path);
    };

    useEffect(() => {
        const storedActiveLink = sessionStorage.getItem('activeLink');
        if (storedActiveLink) {
            setActiveLink(storedActiveLink);
        }
    }, []);


    return (
        <>
            <div className='headerSec'>

                <div className='navBarTop'>
                    <Container>
                        <div className="logoBox">
                            <div className='head-top-logo' onClick={() => handleRedirectionClick("/")}><img src={Constants.LOGO} alt="Logo" className='logo' /></div>

                            <div className='topBar'>
                                <Navbar expand="lg" className="bg-body-tertiary">
                                    <Nav>
                                        <Nav.Link
                                            to="/"
                                            className={activeLink === 'Home' ? 'active' : ''}
                                            onClick={() => { handleNavLinkClick('Home'); navigate("/") }}
                                        >
                                            Home
                                        </Nav.Link>
                                        <Nav.Link
                                            to="/events"
                                            className={activeLink === 'Events' ? 'active' : ''}
                                            onClick={() => { handleNavLinkClick('Events'); eventNavigate() }}
                                        >
                                            Features
                                        </Nav.Link>
                                        <Nav.Link
                                            to="/about"
                                            className={activeLink === 'About' ? 'active' : ''}
                                            onClick={() => { handleNavLinkClick('About'); navigate("/about") }}
                                        >
                                            About
                                        </Nav.Link>

                                        <Nav.Link
                                            to="/guide-form"
                                            className={activeLink === 'Voting' ? 'active' : ''}
                                            onClick={() => { handleNavLinkClick('guide-form'); navigate("/guide-form") }}
                                        >
                                            Become a guide
                                        </Nav.Link>

                                    </Nav>
                                </Navbar>
                            </div>

                            <div className='footer-widget footer-social'>
                                <a href='#'><i class="fa fa-facebook" aria-hidden="true"></i></a>
                                <a href='#'><i class="fa fa-twitter" aria-hidden="true"></i></a>
                                <a href='#'><i class="fa fa-instagram" aria-hidden="true"></i></a>
                                <a href='#'><i class="fa fa-whatsapp" aria-hidden="true"></i></a>
                            </div>


                            <div className='mobileNav'>
                                <MobileMenu />
                            </div>

                        </div>
                    </Container>

                </div >
            </div >
        </>
    )
}

export default Header