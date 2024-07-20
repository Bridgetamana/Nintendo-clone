import "./MoreLikeThis.css";
import Portia from "../../assets/img/portia.avif";
import Ooblets from "../../assets/img/ooblets.avif";
import Portion from "../../assets/img/Portion-permit.avif";
import Controller from "../../assets/img/Controller-Hands.avif";

const MoreLikeThis = () => {
  return (
    <section className="section_4">
      <div>
        <div className="access-card">
          <div className="access-details">
            <button className="online-btn">Online</button>
            <h4>
              Play online, access classic NES™ and Super NES™ games, and more
              with a Nintendo Switch Online membership.
            </h4>
            <span className="online-access-link">
              <p className="game-text">This game supports:</p>
              <ul className="game-link">
                <li>
                  <a href="#">Online Play</a>
                </li>
                <li>
                  <a href="#">Save Data Cloud</a>
                </li>
              </ul>
            </span>
            <button className="learn-more-btn">Learn more</button>
          </div>
          <div className="access-img">
            <img src={Controller} alt="" />
          </div>
        </div>
        <div className="more-access-wrapper">
          <h2>More like this</h2>
          <div className="flex game-card-slider">
            <div className="more-game-card">
              <div className="more-game-img">
                <img src={Portia} alt="" />
              </div>
              <div className="more-game-text">
                <span className="title">
                  <h4>My Time at Portia</h4>
                  <p>4/16/19</p>
                </span>
                <p className="price">$29.99</p>
                <span className="wishlist-btn">
                  <span className="flex">
                    <div className="red-border"></div>
                    <p>Nintendo Switch</p>
                  </span>
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
                </span>
              </div>
            </div>
            <div className="more-game-card">
              <div className="more-game-img">
                <img src={Portion} alt="" />
              </div>
              <div className="more-game-text">
                <span className="title">
                  <h4>Portion-permit</h4>
                  <p>4/16/19</p>
                </span>
                <p className="price">$29.99</p>
                <span className="wishlist-btn">
                  <span className="flex">
                    <div className="red-border"></div>
                    <p>Nintendo Switch</p>
                  </span>
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
                </span>
              </div>
            </div>
            <div className="more-game-card">
              <div className="more-game-img">
                <img src={Ooblets} alt="" />
              </div>
              <div className="more-game-text">
                <span className="title">
                  <h4>Ooblets</h4>
                  <p>2/1/22</p>
                </span>
                <p className="price">$29.99</p>
                <span className="wishlist-btn">
                  <span className="flex">
                    <div className="red-border"></div>
                    <p>Nintendo Switch</p>
                  </span>
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
                </span>
              </div>
            </div>
            <div className="more-game-card">
              <div className="more-game-img">
                <img src={Portia} alt="" />
              </div>
              <div className="more-game-text">
                <span className="title">
                  <h4>My Time at Portia</h4>
                  <p>4/16/19</p>
                </span>
                <p className="price">$29.99</p>
                <span className="wishlist-btn">
                  <span className="flex">
                    <div className="red-border"></div>
                    <p>Nintendo Switch</p>
                  </span>
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
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="warning small-text">
          <p>
            WARNING: If you have epilepsy or have had seizures or other unusual
            reactions to flashing lights or patterns, consult a doctor before
            playing video games. All users should read the Health and Safety
            Information available in the system settings before using this
            software.
          </p>
          <br />
          <p className="">
            Nintendo Switch Online membership (sold separately) and Nintendo
            Account required for online play. Not available in all countries.
            Internet access required for online features. Terms apply.
            nintendo.com/switch-online
          </p>
          <br />
          <p className="small-text">
            Stardew Valley © ConcernedApe LLC 2016-2020. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MoreLikeThis;
