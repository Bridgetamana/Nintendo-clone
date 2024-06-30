import React from "react";
import "./MobileNavToolBar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHeart, FaShoppingCart, FaSearch } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { GoDownload } from "react-icons/go";



const MobileNavToolBar = () => {
  return (
    <div className="toolbar-container">
      <div className="toolbar">
        <div className="download-toolbar">
          <div>
            <span>
              <p>Digital</p>
              <h4>$14.99</h4>
            </span>
            <button className="flex gap-12 download-btn">
              <GoDownload fill="rgb(255, 255, 255)" size={20}/>
              Direct download
            </button>
          </div>
        </div>
        <div className="toolbar-nav">
          <button className="toolbar-nav-btn">
            <GiHamburgerMenu size={30} />
          </button>
          <button className="toolbar-nav-btn">
            <FaHeart size={30} />
          </button>
          <button className="toolbar-nav-btn search">
            <FaSearch size={28} fill="white" />
          </button>
          <button className="toolbar-nav-btn">
            <FaShoppingCart size={30} />
          </button>
          <button className="toolbar-nav-btn">
            <FaUser size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileNavToolBar;
