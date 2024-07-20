import { useState} from "react";
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
  FaStar,
} from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
        
const DesktopNavBar = () => {

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const[categorydropdownOpen, setCategoryDropdownOpen] = useState(false);
  const toggleCategoryDropdown = () => {
    setCategoryDropdownOpen(!categorydropdownOpen);
    console.log('clicked')
  };


  return (
    <nav>
      <div className="header z-index">
        <div className="flex gap-16">
          <div className="nintendologo-desktop">
            <img src={Logo} alt="Nintendo Logo" />
          </div>
          <div className="space-between">
            <form className="search-bar-form">
              <div className="search-bar">
                <FaSearch fill="rgb(114, 114, 114)" className="fasearch" />
                <input type="search" name="search" id="" placeholder="Search" />
              </div>
              <div className="flex gap-12 categories" onClick={toggleCategoryDropdown}>
                <h4>All categories</h4>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  width={16}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m19.5 8.25-7.5 7.5-7.5-7.5"
                  />
                </svg>
                {categorydropdownOpen && (

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
                )}
              </div>
            </form>
          </div>
        </div>
        <div className="nav-quick-links">
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="quick-links"
          >
            <RiQuestionnaireFill size={16} />
            <h4>Support</h4>
          </a>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="quick-links"
          >
            <FaHeart size={14} />
            <h4>Wish List</h4>
          </a>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="quick-links"
          >
            <FaShoppingCart size={16} />
            <h4>Cart</h4>
          </a>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="quick-links"
          >
            <FaUser size={13} />
            <h4>Log in/ Sign up</h4>
          </a>
          <a
            href="http://"
            target="_blank"
            rel="noopener noreferrer"
            className="quick-links flag"
          >
            <img src={Flag} alt="Flag of USA" />
          </a>
        </div>
      </div>
      <div className="z-index">
        <div className="header-dropdown">
          <div className="flex">
            <button className="dropdown" onClick={toggleDropdown}>
              <FaPlus size={14} fill="rgb(230, 0, 18)" />
              <h4 className="text-red">My Nintendo Store</h4>
              <FaAngleDown size={16} fill="rgb(230, 0, 18)" />
            </button>
            <button className="dropdown">
              <FaPlus size={14} />
              <h4>Games</h4>
              <FaAngleDown size={16} />
            </button>
            <button className="dropdown">
              <FaPlus size={14} />
              <h4>Nintendo Switch</h4>
              <FaAngleDown size={16} />
            </button>
            <button className="dropdown">
              <FaPlus size={14} />
              <h4>News & Events</h4>
              <FaAngleDown size={16} />
            </button>
            <button className="dropdown">
              <FaPlus size={14} />
              <h4>Play Nintendo</h4>
              <FaAngleDown size={16} />
            </button>
          </div>
        </div>
      </div>
      {dropdownOpen && (
        <div>
          <div className="overlay"></div>
          <div className="drawer">
            <div className="nintendo-store">
              <div className="nintendo-store-header">
                <span className="store-title">
                  <a
                    href="http://"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="white-text font-bold"
                  >
                    My Nintendo Store
                  </a>
                  <button className="exit-btn" onClick={toggleDropdown}>
                    x
                  </button>
                </span>
                <span className="pattern"></span>
              </div>
              <div className="nintendo-store-menu">
                <div>
                  <span className="flex gap-12">
                    <FaStar fill="rgb(230, 0, 18)" />
                    <h4>Games</h4>
                  </span>
                  <ul className="nintendo-list">
                    <li>Nintendo Switch games</li>
                    <li>New releases</li>
                    <li>Sales & deals</li>
                  </ul>
                </div>
                <div>
                  <span className="flex gap-12">
                    <FaStar fill="rgb(230, 0, 18)" />
                    <h4 className="">Hardware</h4>
                  </span>
                  <ul className="nintendo-list">
                    <li>Nintendo Switch systems</li>
                    <li>Joy-Con & controllers</li>
                    <li>Cases & more</li>
                    <li>amiibo</li>
                  </ul>
                </div>
                <div>
                  <span className="flex gap-12">
                    <FaStar fill="rgb(230, 0, 18)" />
                    <h4 className="">Merchandise</h4>
                  </span>
                  <ul className="nintendo-list">
                    <li>Apparel & accessories</li>
                    <li>Home & office</li>
                    <li>Plush</li>
                    <li>Toys</li>
                  </ul>
                </div>
                <div>
                  <span className="flex gap-12">
                    <FaStar fill="rgb(230, 0, 18)" />
                    <h4 className="">Store exclusives</h4>
                  </span>
                  <ul className="nintendo-list">
                    <li>Exclusives products</li>
                    <li>My Nintendo rewards</li>
                    <li>Nintendo Switch Online offers</li>
                  </ul>
                </div>
                <div>
                  <span className="flex gap-12">
                    <FaStar fill="rgb(230, 0, 18)" />
                    <h4 className="">Characters</h4>
                  </span>
                  <ul className="nintendo-list">
                    <li>Pikmin</li>
                    <li>Splatoon</li>
                    <li>Super Mario</li>
                    <li>The Legend of Zelda</li>
                  </ul>
                </div>
                <div>
                  <span className="flex gap-12">
                    <FaStar fill="rgb(230, 0, 18)" />
                    <h4 className="">Sales</h4>
                  </span>
                  <ul className="nintendo-list"></ul>
                </div>
              </div>
              <button className="shop-all">Shop all</button>
            </div>
          </div>
        </div>
      )}
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
            <p>
              Earn{" "}
              <a href="#" className="points-link font-bold">
                My Nintendo Points
              </a>{" "}
              on digital games
            </p>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNavBar;
