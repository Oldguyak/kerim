import React from 'react';
import '../Footer.css';
import GooglePlay from "../images/MobileApp.png"
import AppStore from "../images/MobileApp1.png"

const Footer = () => {
  return (
    <div className='main-container'>
    <footer className="site-footer">
     
      <div className="footer-section">
        <p className='footer-title'>Milli San</p>
      <ul className="navigation-links">
        <li>Customer Support<br/><a href="#">+993 64 00000</a></li>
        <li>Ashgabat  D. 5/1, 1 micro district,<br/> street Magtymguly</li>
        <li><a href="#">info@millisan.com</a></li>
      </ul>
      </div>
      <div className="footer-section">
        <p>TOP CATEGORY</p>
        <ul className="navigation-links">
          <li><a href="#">Computer & Laptop</a></li>
          <li><a href="#">SmartPhone</a></li>
          <li><a href="#">Headphone</a></li>
          <li><a href="#">Accessories</a></li>
          <li><a href="#">Camera & Photo</a></li>
          <li><a href="#">TV & Homes</a></li>
          <li><a href="#" className='search'>Browse All Product</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <p>QUICK LINKS</p>
        <ul className="navigation-links">
          <li><a href="#">Shop Product</a></li>
          <li><a href="#">Shoping Card</a></li>
          <li><a href="#">Whislist</a></li>
          <li><a href="#">Buy Now</a></li>
          <li><a href="#">Milli Global</a></li>
          <li><a href="#">Customer Support</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <p>TOP CATEGORY</p>
        <ul className="navigation-links">
          <img src={GooglePlay}/>
          <img src={AppStore}/>
        </ul>
      </div>
      
      
    </footer>
    <div className='copyright-container'>
      <p className="copyright">© 2024. All rights reserved.</p>
    </div>
    </div>
  );
};

export default Footer;