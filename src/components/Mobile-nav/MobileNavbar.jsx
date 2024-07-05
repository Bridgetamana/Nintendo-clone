import React from "react";
import "./MobileNavbar.css";
import Logo from "../../assets/img/nintendo-logo.jpeg";
import Flag from "../../assets/img/united-states-flag.png";

const Navbar = () => {
  return (
    <nav>
      <div>
        <div className="space-between mobileNav red-bg">
          <div className="nintendo-logo">
            <img src={Logo} alt="Nintendo Logo" />
          </div>
          <div className="nav-link">
            <a href="#" className="white-text font-bold">
              My Nintendo Store
            </a>
            <div className="flag">
              <img src={Flag} alt="Flag of USA" />
            </div>
          </div>
        </div>
        <div className="flex-center nav-banner">
          <span className="space-between">
            <p className="nav-banner-text">
              Earn{" "}
              <a href="#" className="points-link font-bold">
                My Nintendo Points
              </a>{" "}
              on digital games
            </p>
            {/* <b>Free shipping</b>
            on orders $50 or more.
            <a href="#" target="blank" className="underline">
              Restrictions apply
            </a> */}
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
