import React from "react";
import Logo from "../../assets/img/nintendo-logo.jpeg";
import Flag from "../../assets/img/united-states-flag.png";
import "./Footer.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Certificate from "../../assets/img/esrb-certificate.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <div className="flex-center social-links-wrapper">
          <div>
            <img src={Logo} alt="Nintendo Logo" />
          </div>
          <div className="flex gap-12 social-links">
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaFacebook fill="#fff" size={30} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaInstagram fill="#fff" size={30} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaXTwitter fill="#fff" size={30} />
            </a>
            <a href="" target="_blank" rel="noopener noreferrer">
              <FaYoutube fill="#fff" size={30} />
            </a>
          </div>
        </div>
        <div className="footer-links-wrapper">
          <div className="footer-links">
            <h4>About Nintendo</h4>
            <ul>
              <li>
                <a href="#" className="links">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="links">
                  Corporate Social Resposibility
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Shop</h4>
            <ul>
              <li>
                <a href="#" className="links">
                  Games
                </a>
              </li>
              <li>
                <a href="#" className="links">
                  Hardware
                </a>
              </li>
              <li>
                <a href="#" className="links">
                  Merchandise
                </a>
              </li>
              <li>
                <a href="#" className="links">
                  Sales & deals
                </a>
              </li>
              <li>
                <a href="#" className="links">
                  Exclusives
                </a>
              </li>
              <li>
                <a href="#" className="links">
                  Online service
                </a>
              </li>
              <li>
                <a href="#" className="links">
                  Nintendo NY store
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>My Nintendo Store orders</h4>
            <ul>
              <li>
                <a href="" className="links">
                  Order details
                </a>
              </li>
              <li>
                <a href="#" className="links">
                  Shipping info
                </a>
              </li>
              <li>
                <a href="#" className="links">
                  Returns & exchanges
                </a>
              </li>
              <li>
                <a href="#" className="links">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Support</h4>
            <ul>
              <li>
                <a href="#" className="links">
                  Nintendo Switch
                </a>
              </li>
              <li>
                <a href="#" className="links">
                  Nintendo Account
                </a>
              </li>
              <li>
                <a href="#" className="links">
                  Other systems
                </a>
              </li>
              <li>
                <a href="#" className="links">
                  Repairs
                </a>
              </li>
              <li>
                <a href="#" className="links">
                  Nintendo product recycling
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Parents</h4>
            <ul>
              <li>
                <a href="#" className="links">
                  Info for parents
                </a>
              </li>
              <li>
                <a href="#" className="links">
                  Parental controls
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Community</h4>
            <ul>
              <li>
                <a href="#" className="links">
                  Community guidelines
                </a>
              </li>
              <li>
                <a href="#" className="links">
                  Online safety principles
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Privacy</h4>
            <ul>
              <li>
                <a href="#" className="links">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="links">
                  Cookies and interest-based ads
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="esrb-certificate">
          <img src={Certificate} alt="" />
        </div>
        <div className="policy">
          <p>
            © Nintendo. Games are property of their respective owners. Nintendo
            of America Inc. Headquarters are in Redmond, Washington, USA
          </p>
          <ul className="policy-links">
            <li>
              <a href="#">Contact us</a>
            </li>
            <li>
              <a href="#">Website feedback</a>
            </li>
            <li>
              <a href="#">Terms of Use</a>
            </li>
            <li>
              <a href="#">Documents & Policies</a>
            </li>
          </ul>
          <div className="language">
            <div>
              <img src={Flag} alt="Flag of USA" />
            </div>
            <a href="#">English (United States)</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
