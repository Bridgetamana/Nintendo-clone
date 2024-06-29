import React from "react";
import './ProductInfo.css';

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
            <div>
              <div className="product-data ">
                <h3>i</h3>
                <div>
                  <h3>Release date</h3>
                  <p>October 5, 2017</p>
                </div>
              </div>
              <div className="product-data">
                <h3>i</h3>
                <div>
                  <h3>No. of players</h3>
                  <div className="product-links">
                    <a href="#">Single System (1)</a>
                    <a href="#">Local wireless (1)</a>
                    <a href="#">Online (1-4)</a>
                  </div>
                </div>
              </div>
              <div className="product-data">
                <h3>i</h3>
                <div>
                  <h3>Genre</h3>
                  <div className="product-links">
                    <a href="#">Role-divlaying</a>
                    <a href="#">Simulation</a>
                  </div>
                </div>
              </div>
              <div className="product-data">
                <h3>i</h3>
                <div>
                  <h3>Publisher</h3>
                  <div className="product-links">
                    <a href="#">ConcernedApe</a>
                  </div>
                </div>
              </div>
              <div className="product-data">
                <h3>i</h3>
                <div>
                  <h3>ESRB rating</h3>
                  <div className="product-links">
                    <a href="#">Everyone 10+</a>
                  </div>
                </div>
              </div>
              <div className="product-data">
                <h3>i</h3>
                <div>
                  <h3>Supported play modes</h3>
                  <div>
                    <p>Tv mode, Tabletop mode, Handheld mode</p>
                  </div>
                </div>
              </div>
              <div className="product-data">
                <h3>i</h3>
                <div>
                  <h3>Game file size</h3>
                  <p>1.5 GB</p>
                </div>
              </div>
              <div className="product-data">
                <h3>i</h3>
                <div>
                  <h3>Supported languages</h3>
                  <p>
                    English, French, German, Italian,Japanese,Korean,Portuguese,
                    Russian, Simplified Chunese, Spanish, divaditional Chinese
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
