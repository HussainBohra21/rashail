import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link, useNavigate } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Constants from './Constants';
import PathConstants from './../../Helper/Routes/PathConstants';

const locales = {
  en: { title: 'English' },
  es: { title: 'Spanish' },
};

const Footer = () => {

  var parse = require('html-react-parser');
  const { t, i18n } = useTranslation();

  const navigate = useNavigate();
  const handleRedirectionClick = (path) => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
    navigate(`${path}`);
  }


  return (
    <>
      <div id="footer" className='sectionPadding padding-bottom-80'>
        <Container>
          <div className='inner-footer'>
            <div className='colBox1'>
              <div className='footer-widget'>
                <div className='head-top-logo' onClick={() => handleRedirectionClick(PathConstants.HOME)}><img src={Constants.LOGO} alt="Logo" className='logo' /></div>
                <p>Lorem ipsum dolor sit amet consectetur. Quis quis augue morbi non pretium. Pellentesque est massa platea eget. Cursus at viverra sed venenatis id. Dignissim lacus bibendum non mattis non fames.</p>
              </div>
            </div>
            <div className='colBox2'>
              <div className='footer-widget'>
                <h4>Users and Organizers</h4>
                <ul>
                  <li> <a href="#">Login</a></li>
                  <li> <a href="#">Register</a></li>
                  <li> <a href="#">Voting</a></li>
                  <li> <a href="#">Lorem Ipsum</a></li>
                </ul>
              </div>
            </div>
            <div className='colBox3'>
              <div className='footer-widget'>
                <h4>The Platform</h4>
                <ul>
                  <li> <a href="#">About Us</a></li>
                  <li> <a href="#">Press</a></li>
                  <li> <a href="#">Contact Us</a></li>
                  <li> <a href="#">Help Center</a></li>
                </ul>
              </div>
            </div>
            <div className='colBox4'>
              <div className='footer-widget footer-social'>
                <a href='#'><img src={Constants.SOCIALICON1} alt="event" /></a>
                <a href='#'><img src={Constants.SOCIALICON2} alt="event" /></a>
                <a href='#'><img src={Constants.SOCIALICON3} alt="event" /></a>
                <a href='#'><img src={Constants.SOCIALICON4} alt="event" /></a>
              </div>
              <p className='copyRight'>All rights are Reserved</p>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}

export default Footer