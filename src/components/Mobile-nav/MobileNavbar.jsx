import React from 'react';
import "./MobileNavbar.css";
import Logo from "../../assets/img/nintendo-logo.jpeg"
import Flag from "../../assets/img/united-states-flag.png";

const Navbar = () => {
  return (
    <nav className="full-width">
      <div className="">
        <div className="space-between mobileNav red-bg">
          <div>
            <img src={Logo} width={80} alt="Nintendo Logo" />
          </div>
          <div className='nav-link'>
            <a href="#" className='white-text'>My Nintendo Store</a>
            <div>
              <img src={Flag} width={20} alt="Flag of USA" className='flag' />
            </div>
          </div>
        </div>
        <div className="flex-center nav-banner">
          <span className="space-between">
            <p>Earn <a href="#" className='points-link font-bold'>My Nintendo Points</a> on digital games</p>
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar