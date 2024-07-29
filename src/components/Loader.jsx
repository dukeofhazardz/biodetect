import React from 'react';
import AnimatedLogo from '../assets/images/animated-logo.gif';


const Loader = () => {
  return (
    <div className='loader'>
      <img className='logo' src={AnimatedLogo} alt="butterfly logo" />
      <p className='text'>BioDetect</p>
    </div>
  )
}

export default Loader;
