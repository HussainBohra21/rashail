import React from 'react';
import Constants from './Constants';

function Loader() {
  return (
    <div className='loadingPage'>
      <img src={Constants.LOGO} className='loadingLogo' alt="logo" />
    </div>
  )
}

export default Loader
