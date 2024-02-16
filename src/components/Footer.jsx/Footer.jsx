import React from 'react';
import './footer.css';
import ig_icon from '../assets/instagram_icon.png';
import pintrest_icon from '../assets/pintester_icon.png';
import whatsapp_icon from '../assets/whatsapp_icon.png';

const Footer = () => {
    const date = new Date().getFullYear();
    
  return (
    <div className='footer'>
    <div className='footer-logo'>
        <p>CARES</p>
    </div>
    <ul className='footer-links'>
    <li>Company</li>
    <li>Products</li>
    <li>Offices</li>
    <li>About</li>
    <li>Contact</li>
    </ul>
    <div className='footer-social-icons'>
    <div className='footer-icons-container'>
    <img src={ig_icon} alt='insta_icon'/>
    </div>
    <div className='footer-icons-container'>
    <img src={pintrest_icon} alt='pinterest_icon'/>
    </div>
    <div className='footer-icons-container'>
    <img src={whatsapp_icon} alt='whatsapp_icon'/>
    </div>
    
    </div>
    <div className='footer-copyright'>
    <hr/>
    <p>Copyright @ {date} - All Rights Reserved</p>
    </div>

    
      
    </div>
  )
}

export default Footer
