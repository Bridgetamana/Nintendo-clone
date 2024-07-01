import React from "react";
import "./Product.css";
import Stardew from "../../assets/img/stardew-valley.avif";
import Certificate from "../../assets/img/esrb-certificate.png";
import { MdChevronRight } from "react-icons/md";

function Product() {
  return (
    <section>
      <div>
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
                <MdChevronRight fill="#dadada" />
              </li>
              <li className="flex breadcrumb-list">
                <a
                  href="https://www.nintendo.com/us/store/games/"
                  className="gray-text"
                >
                  Games
                </a>
                <MdChevronRight fill="#dadada" />
              </li>
              <li className="flex">
                <a href="#" className="gray-text">
                  Stardew Valley
                </a>
              </li>
            </ul>
          </div>
          <div>
            <div className="product-image">
              <div className="stardew-img">
                <img src={Stardew} alt="Stardew Valley" />
              </div>
              <div className="flex gap-12 image-slider">
                <img src={Stardew} width={150} alt="Stardew Valley 1" />
                <img src={Stardew} width={150} alt="Stardew Valley 2" />
                <img src={Stardew} width={150} alt="Stardew Valley 3" />
                <img src={Stardew} width={150} alt="Stardew Valley 4" />
                <img src={Stardew} width={150} alt="Stardew Valley 5" />
                <img src={Stardew} width={150} alt="Stardew Valley 6" />
                <img src={Stardew} width={150} alt="Stardew Valley 7" />
                <img src={Stardew} width={150} alt="Stardew Valley 8" />
              </div>
            </div>
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
                <div className="product-detil-title"></div>
                <button className="wishlist-button">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    width={24}
                    viewBox="0 0 24 24"
                    stroke="rgb(230, 0, 18)"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </button>
              </div>
              <div className="product-detil-description"></div>
              <button className="buy-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="rgb(225, 225, 225)"
                  width={24}
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
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <p className="small-text">
                This item will be sent to your system automatically after
                purchase.
              </p>
            </div>
          </div>
        </div>
        <div className="game-description">
          <div>
            <div>
              <h3>You&apos;re moving to the valley...</h3>
              <br />
              <span className="full-description">
                <p>
                  You’ve inherited your grandfather’s old farm plot in Stardew
                  Valley. Armed with hand-me-down tools and a few coins, you set
                  out to begin your new life. Can you learn to live off the land
                  and turn these overgrown fields into a thriving home? It won’t
                  be easy. Ever since Joja Corporation came to town, the old
                  ways of life have all but disappeared. The community center,
                  once the town’s most vibrant hub of activity, now lies in
                  shambles. But the valley seems full of opportunity. With a
                  little dedication, you might just be the one to restore
                  Stardew Valley to greatness!
                  <br />
                  <br />
                  Now with Multiplayer! Invite 1-3 players to join you in the
                  valley! Players can work together to build a thriving farm,
                  share resources, and build relationships with townspeople or
                  each other. As more hands are better than one, players have
                  the option to scale profit margin on produce sold for a more
                  challenging experience.
                </p>
                <button className="readmore-btn">
                  <a href="#" className="readmore-link">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="rgb(230, 0, 18)"
                      width={24}
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p>Read more</p>
                  </a>
                </button>
                <p className="small-text">
                  Software description provided by the publisher.
                </p>
              </span>
              <button className="explore-btn">
                <a
                  href="http://www.stardewvalley.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore this game&apos;s official website
                </a>
              </button>
            </div>
            <div className="stardew-image">
              <img src={Stardew} alt="Stardew Valley" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
