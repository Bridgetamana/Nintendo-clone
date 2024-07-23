import { useState, useEffect } from "react";
import "./MobileNavToolBar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaHeart, FaShoppingCart, FaSearch, FaPlus } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";
import { GoDownload } from "react-icons/go";
import { MdChevronRight } from "react-icons/md";
import Flag from "../../assets/img/united-states-flag.png";

const MobileNavToolBar = () => {
  const [visible, setVisible] = useState(false);
  const [menuDrawer, setMenuDrawer] = useState(false);

  const toggleMenuDrawer = () => {
    setMenuDrawer(!menuDrawer);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="toolbar-container">
      <div className="toolbar">
        <div className={`download-toolbar ${visible ? "visible" : ""}`}>
          <div>
            <span>
              <p>Digital</p>
              <h4>$14.99</h4>
            </span>
            <button className="flex gap-12 download-btn">
              <GoDownload fill="rgb(255, 255, 255)" size={20} />
              Direct download
            </button>
          </div>
        </div>
        <div className="toolbar-nav">
          <button className="toolbar-nav-btn" onClick={toggleMenuDrawer}>
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

      {menuDrawer && (
        <div className="menu-drawer-container">
          <div className="menu-drawer">
            <div className="drawer-header">
              <h3>Menu</h3>
              <button className="exit-drawer-btn" onClick={toggleMenuDrawer}>
                X
              </button>
            </div>
            <div className="drawer-body">
              <button className="drawer-menu">
                <div className="drawer-icons">
                  <FaPlus size={14} fill="rgb(230, 0, 18)" />
                </div>
                <p>My Nintendo Store</p>
                <span>
                  <MdChevronRight size={26} />
                </span>
              </button>
              <button className="drawer-menu">
                <div className="drawer-icons">
                  <FaPlus size={14} fill="rgb(230, 0, 18)" />
                </div>
                <p>Games</p>
                <span>
                  <MdChevronRight size={26} />
                </span>
              </button>
              <button className="drawer-menu">
                <div className="drawer-icons">
                  <FaPlus size={14} fill="rgb(230, 0, 18)" />
                </div>
                <p>Nintendo Switch</p>
                <span>
                  <MdChevronRight size={26} />
                </span>
              </button>
              <button className="drawer-menu">
                <div className="drawer-icons">
                  <FaPlus size={14} fill="rgb(230, 0, 18)" />
                </div>
                <p>News & Events</p>
                <span>
                  <MdChevronRight size={26} />
                </span>
              </button>
              <button className="drawer-menu">
                <div className="drawer-icons">
                  <FaPlus size={14} fill="rgb(230, 0, 18)" />
                </div>
                <p>Play Nintendo</p>
                <span>
                  <MdChevronRight size={26} />
                </span>
              </button>
              <button className="drawer-menu">
                <div className="drawer-icons">
                  <FaPlus size={14} fill="rgb(230, 0, 18)" />
                </div>
                <p>Support</p>
              </button>
              <button className="drawer-menu">
                <a
                  href="http://"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flag drawer-icons"
                >
                  <img src={Flag} alt="Flag of USA" />
                </a>
                <p>Change Region</p>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavToolBar;
