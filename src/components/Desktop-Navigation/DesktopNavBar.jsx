import React from "react";
import "./DesktopNavBar.css";
import Logo from "../../assets/img/nintendo-logo.jpeg";
import Flag from "../../assets/img/united-states-flag.png";
import { RiQuestionnaireFill } from "react-icons/ri";
import {
  FaHeart,
  FaShoppingCart,
  FaSearch,
  FaPlus,
  FaAngleDown,
} from "react-icons/fa";
import { FaUser } from "react-icons/fa6";


const DesktopNavBar = () => {
  return (
    <nav>
      <div className="header">
        <div className="flex gap-16">
          <div className="nintendologo-desktop">
            <img src={Logo} alt="Nintendo Logo" />
          </div>
          <div className="space-between">
            <form>
              <div className="search-bar">
                <FaSearch size={18} fill="rgb(114, 114, 114)" />
                <input type="search" name="search" id="" placeholder="Search" />
              </div>
              <div className="flex gap-12">
                <h4>All categories</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  width={18}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
                <div className="all-categories-menu">
                  <ul>
                    <li>All categories</li>
                    <li>Games</li>
                    <li>Hardware</li>
                    <li>Merchandise</li>
                    <li>News & Events</li>
                    <li>Support</li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="flex gap-16">
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="quick-links"
          >
            <RiQuestionnaireFill size={20} />
            <h4>Support</h4>
          </a>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="quick-links"
          >
            <FaHeart size={18} />
            <h4>Wish List</h4>
          </a>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="quick-links"
          >
            <FaShoppingCart size={20} />
            <h4>Cart</h4>
          </a>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="quick-links"
          >
            <FaUser size={18} />
            <h4>Log in/ Sign up</h4>
          </a>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="quick-links"
          >
            <img src={Flag} alt="Flag of USA" />
          </a>
        </div>
      </div>
      <div className="header-dropdown">
        <div className="flex">
          <button className="dropdown">
            <FaPlus size={18} />
            <h4>My Nintendo Store</h4>
            <FaAngleDown size={18} />
          </button>
          <button className="dropdown">
            <FaPlus size={18} />
            <h4>Games</h4>
            <FaAngleDown size={18} />
          </button>
          <button className="dropdown">
            <FaPlus size={18} />
            <h4>Nintendo Switch</h4>
            <FaAngleDown size={18} />
          </button>
          <button className="dropdown">
            <FaPlus size={18} />
            <h4>News & Events</h4>
            <FaAngleDown size={18} />
          </button>
          <button className="dropdown">
            <FaPlus size={18} />
            <h4>Play Nintendo</h4>
            <FaAngleDown size={18} />
          </button>
        </div>
      </div>
      <div className="flex-center banner-container">
        <div className="banner">
          <span className="shipping">
            <b>Free shipping</b>
            on orders $50 or more.
            <a href="#" target="blank" className="underline">
              Restrictions apply
            </a>
          </span>
          <span className="earn-points">
            <p>Earn <a href="#" className='points-link font-bold'>My Nintendo Points</a> on digital games</p>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNavBar;
