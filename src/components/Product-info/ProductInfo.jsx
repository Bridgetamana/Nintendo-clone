import React from "react";
import "./ProductInfo.css";
import { FaCalendarAlt, FaUsers } from "react-icons/fa";
import { BsDpadFill, BsBuildingFill, BsGearFill } from "react-icons/bs";
import { IoIosPhoneLandscape, IoIosGlobe } from "react-icons/io";
import { GrStorage } from "react-icons/gr";

const ProductInfo = () => {
  return (
    <section>
      <div>
        <div className="rating-wrapper">
          <div className="rating-card">
            <h4 className="text-center">ESRB rating</h4>
            <div className="space-between gap-12">
              <span>
                <img src="" alt="Rating" />
              </span>
              <span className="rating-text">
                <p>
                  Fantasy Violence, Use of Alcohol, Use of Tobacco, Simulated
                  Gambling, Mild Language, Mild Blood
                </p>
                <p>Users Interact</p>
              </span>
            </div>
          </div>
          <div className="supported-devices">
            <h4 className="text-center">Supported play mood</h4>
            <div>
              <div className="devices">
                <div className="devices-img">
                  <img src="" alt="Tv" />
                </div>
                <p>TV</p>
              </div>
              <div className="devices">
                <div className="devices-img">
                  <img src="" alt="Tabletop" />
                </div>
                <p>Tabletop</p>
              </div>
              <div className="devices">
                <div className="devices-img">
                  <img src="" alt="Mobile phone" />
                </div>
                <p>Handheld</p>
              </div>
            </div>
          </div>
        </div>
        <div className="product-info-container">
          <div className="product-info">
            <div className="product-data ">
              <FaCalendarAlt size={24} />
              <div>
                <h4>Release date</h4>
                <div className="product-links">
                  <p>October 5, 2017</p>
                </div>
              </div>
            </div>
            <div className="product-data">
              <FaUsers size={24} />
              <div>
                <h4>No. of players</h4>
                <div className="product-links">
                  <a href="#">Single System (1)</a>
                  <a href="#">Local wireless (1)</a>
                  <a href="#">Online (1-4)</a>
                </div>
              </div>
            </div>
            <div className="product-data">
              <BsDpadFill size={24} />
              <div>
                <h4>Genre</h4>
                <div className="product-links">
                  <a href="#">Role-divlaying</a>
                  <a href="#">Simulation</a>
                </div>
              </div>
            </div>
            <div className="product-data">
              <BsBuildingFill size={24} />
              <div>
                <h4>Publisher</h4>
                <div className="product-links">
                  <a href="#">ConcernedApe</a>
                </div>
              </div>
            </div>
            <div className="product-data">
              <BsGearFill size={24} />
              <div>
              <h4>ESRB rating</h4>
              <div className="product-links">
                <a href="#">Everyone 10+</a>
              </div>

              </div>
            </div>
            <div className="product-data">
              <IoIosPhoneLandscape size={24} />
              <h4>Supported play modes</h4>
              <div className="product-links">
                <p>Tv mode, Tabletop mode, Handheld mode</p>
              </div>
            </div>
            <div className="product-data">
              <GrStorage size={24} />
              <h4>Game file size</h4>
              <div className="product-links">
                <p>1.5 GB</p>
              </div>
            </div>
            <div className="product-data">
              <IoIosGlobe size={24} />
              <h4>Supported languages</h4>
              <div className="product-links">
                <p>
                  English, French, German, Italian,Japanese,Korean,Portuguese,
                  Russian, Simplified Chunese, Spanish, divaditional Chinese
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
