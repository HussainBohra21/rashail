import React, { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


import Constants from '../Components/UiKit/Constants';


const locales = {
    en: { title: 'English' },
    es: { title: 'Spanish' },
};

const MobileMenu = ({ name, ...props }) => {

    const [activeLink, setActiveLink] = useState('Home');

    const handleNavLinkClick = (linkName) => {
        setActiveLink(linkName);
    };




    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const menuShow = () => setShow(true);

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
    }

    return (
        <>
            <div className='mobileNavInnerBox'>
                <div className='mobile-toggle-icon'><div onClick={menuShow}><img src={Constants.MENU} /></div></div>
            </div>

            {['end'].map((placement, idx) => (
                <Offcanvas key={idx} placement={placement} name={placement} show={show} onHide={handleClose} {...props}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title><img src={Constants.LOGO} alt="Logo" className='logo' /></Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>

                        {/* Menu */}

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
                                    to="/about"
                                    className={activeLink === 'About' ? 'active' : ''}
                                    onClick={() => { handleNavLinkClick('About'); navigate("/about") }}
                                >
                                    Features
                                </Nav.Link>
                                <Nav.Link
                                    to="/events"
                                    className={activeLink === 'Events' ? 'active' : ''}
                                    onClick={() => { handleNavLinkClick('Events'); eventNavigate() }}
                                >
                                    About
                                </Nav.Link>
                                <Nav.Link
                                    to="/guide-form"
                                    className={activeLink === 'Voting' ? 'active' : ''}
                                    onClick={() => { handleNavLinkClick('Voting'); navigate('/guide-form') }}
                                >
                                    Become a guide
                                </Nav.Link>
                                <Nav.Link
                                    to="/contact"
                                    className={activeLink === 'Contact Us' ? 'active' : ''}
                                    onClick={() => handleNavLinkClick('Contact Us')}
                                >
                                    Contact Us
                                </Nav.Link>
                            </Nav>
                        </Navbar>

                        {/* Menu End */}


                    </Offcanvas.Body>
                </Offcanvas>
            ))}
        </>
    )
}

export default MobileMenu