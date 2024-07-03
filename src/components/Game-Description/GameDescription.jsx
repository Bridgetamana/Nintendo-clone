import React from 'react';
import Stardew from "../../assets/img/stardew-valley.avif";

const GameDescription = () => {
  return (
    <section>
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
                be easy. Ever since Joja Corporation came to town, the old ways
                of life have all but disappeared. The community center, once the
                town’s most vibrant hub of activity, now lies in shambles. But
                the valley seems full of opportunity. With a little dedication,
                you might just be the one to restore Stardew Valley to
                greatness!
                <br />
                <br />
                Now with Multiplayer! Invite 1-3 players to join you in the
                valley! Players can work together to build a thriving farm,
                share resources, and build relationships with townspeople or
                each other. As more hands are better than one, players have the
                option to scale profit margin on produce sold for a more
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
    </section>
  );
}

export default GameDescription