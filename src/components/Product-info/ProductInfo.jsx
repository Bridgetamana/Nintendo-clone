import React from "react";

const ProductInfo = () => {
  return (
    <section>
      <div>
        <div>
          <div>
            <h4 className="text-center">ESRB rating</h4>
            <div className="space-between gap-12">
              <span>
                <img src="" alt="Rating" />
              </span>
              <span>
                <p>
                  Fantasy Violence, Use of Alcohol, Use of Tobacco, Simulated
                  Gambling, Mild Language, Mild Blood
                </p>
                <hr />
                <p>Users Interact</p>
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-center">Supported play mood</h3>
            <div className="flex gap-12">
              <div>
                <img src="" alt="Tv" />
                <p>TV</p>
              </div>
              <div>
                <img src="" alt="Tabletop" />
                <p>Tabletop</p>
              </div>
              <div>
                <img src="" alt="Mobile phone" />
                <p>Handheld</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <div className="flex gap-12">
                <h3>i</h3>
                <div>
                  <h3>Release date</h3>
                  <p>October 5, 2017</p>
                </div>
              </div>
              <div className="flex gap-12">
                <h3>i</h3>
                <div>
                  <h3>No. of players</h3>
                  <p>
                    <a href="#">Single System (1)</a>
                    <a href="#">Local wireless (1)</a>
                    <a href="#">Online (1-4)</a>
                  </p>
                </div>
              </div>
              <div className="flex gap-12">
                <h3>i</h3>
                <div>
                  <h3>Genre</h3>
                  <p>
                    <a href="#">Role-playing</a>
                    <a href="#">Simulation</a>
                  </p>
                </div>
              </div>
              <div className="flex gap-12">
                <h3>i</h3>
                <div>
                  <h3>Publisher</h3>
                  <p>
                    <a href="#">ConcernedApe</a>
                  </p>
                </div>
              </div>
              <div className="flex gap-12">
                <h3>i</h3>
                <div>
                  <h3>ESRB rating</h3>
                  <p>
                    <a href="#">Everyone 10+</a>
                  </p>
                </div>
              </div>
              <div className="flex gap-12">
                <h3>i</h3>
                <div>
                  <h3>Supported play modes</h3>
                  <p>
                    <p>Tv mode, Tabletop mode, Handheld mode</p>
                  </p>
                </div>
              </div>
              <div className="flex gap-12">
                <h3>i</h3>
                <div>
                  <h3>Game file size</h3>
                  <p>1.5 GB</p>
                </div>
              </div>
              <div className="flex gap-12">
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
