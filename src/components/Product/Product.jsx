import {useState, useEffect} from "react";
import "./Product.css";
import Stardew from "../../assets/img/stardew-valley.avif";
import Stardew3 from "../../assets/img/stardew-valley3-desktop.avif";
import Stardew4 from "../../assets/img/stardew-valley4-desktop.avif";
import Stardew5 from "../../assets/img/stardew-valley5-desktop.avif";
import Stardew6 from "../../assets/img/stardew-valley6-desktop.avif";
import Stardew7 from "../../assets/img/stardew-valley7-desktop.avif";
import Stardew8 from "../../assets/img/stardew-valley8-desktop.avif";
import Certificate from "../../assets/img/esrb-certificate.png";
import GoldCoin from "../../assets/img/my-nintendo-gold-coin.avif";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
const images = [
  { src: Stardew, alt: "Stardew Valley 1" },
  { src: Stardew, alt: "Stardew Valley 2" },
  { src: Stardew3, alt: "Stardew Valley 3" },
  { src: Stardew4, alt: "Stardew Valley 4" },
  { src: Stardew5, alt: "Stardew Valley 5" },
  { src: Stardew6, alt: "Stardew Valley 6" },
  { src: Stardew7, alt: "Stardew Valley 7" },
  { src: Stardew8, alt: "Stardew Valley 8" },
];

const Product = () => {
  //Image slider
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // LOADING ANIMATION
  const [isLoading, setLoading] = useState(true);

   useEffect(() => {
     const timer = setTimeout(() => {
       setLoading(false);
     }, 4000);

     return () => clearTimeout(timer);
   }, []);
   
  return (
    <section className="section_1">
      <div className="stardew-product-card">
        <div className="breadcrumb">
          <ul className="flex">
            <li className="flex breadcrumb-list">
              <a
                href="https://www.nintendo.com/us/store/"
                className="gray-text"
              >
                Store
              </a>
              <MdChevronRight fill="#dadada" size={22} />
            </li>
            <li className="flex breadcrumb-list">
              <a
                href="https://www.nintendo.com/us/store/games/"
                className="gray-text"
              >
                Games
              </a>
              <MdChevronRight fill="#dadada" size={22} />
            </li>
            <li className="flex breadcrumb-list">
              <a href="#" className="gray-text">
                Stardew Valley
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="stardew-img flex">
            <img
              src={images[currentIndex].src}
              width={150}
              alt={images[currentIndex].alt}
            />
            <div>
              <MdChevronLeft
                className="prev"
                size={60}
                onClick={prevSlide}
                fill="white"
              />
              <MdChevronRight
                className="next"
                size={60}
                onClick={nextSlide}
                fill="white"
              />
            </div>
          </div>
          <div className="flex image-slider">
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                onClick={() => goToSlide(index)}
                width={150}
                alt={image.alt}
                style={{
                 borderBottom:
                    currentIndex === index
                      ? "6px solid rgb(230, 0, 18)"
                      : "",
                  opacity: currentIndex === index ? "1" : "0.8",
                }}
              />
            ))}
          </div>{" "}
          <div className="flex rating">
            <div className="rating-img">
              <img src={Certificate} alt="" />
            </div>
            <div>
              <p className="warning-text">
                Fantasy Violence, Use of Alcohol, Use of Tobacco, Simulated
                Gambling, Mild Language, Mild Blood
              </p>
              <p>Users Interact</p>
            </div>
          </div>
        </div>
        <div className="product-detail">
          <span>
            <div className="red-border"></div>
            <p>Nintendo Switch</p>
          </span>
          <div>
            <h2>Stardew Valley</h2>
            <div className="space-between">
              {isLoading ? (
                <div
                  className={isLoading ? "product-detil-title" : "hidden"}
                ></div>
              ) : (
                <h2 className="loaded-title">$14.99</h2>
              )}
              <button className="wishlist-button">
                <FaRegHeart size={30} fill="rgb(230, 0, 18)" />{" "}
              </button>
            </div>
            {isLoading ? (
              <div
                className={isLoading ? "product-detil-description" : "hidden"}
              ></div>
            ) : (
              <div className="flex gap-12">
                <div className="gold-point">
                  <img src={GoldCoin} alt="" />
                </div>
                <p className="goldpoint-text">
                  Eligible for up to <b>75</b> Gold Points
                </p>
              </div>
            )}
            {isLoading ? (
              <button className="buy-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="rgb(225, 225, 225)"
                  width={24}
                  className="buy-svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="rgb(225, 225, 225)"
                  width={24}
                  className="buy-svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="rgb(225, 225, 225)"
                  width={24}
                  className="buy-svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            ) : (
              <button className="flex gap-12 buy-btn">
                <GoDownload fill="rgb(255, 255, 255)" size={30} />
                Direct download
              </button>
            )}
            <p className="small-text">
              This item will be sent to your system automatically after
              purchase.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
