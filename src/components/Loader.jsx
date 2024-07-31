import React, { useEffect } from 'react';
import AnimatedLogo from '../assets/images/animated-logo.gif';


const Loader = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      document.querySelector('.loader').style.display = 'none';
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='loader'>
      <img className='logo' src={AnimatedLogo} alt="butterfly logo" />
      <p className='text'>BioDetect</p>
    </div>
  )
}

export default Loader;
