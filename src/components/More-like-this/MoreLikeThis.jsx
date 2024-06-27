import React from 'react'

const MoreLikeThis = () => {

  
  
  return (
    <section>
      <div>
        <div className='flex-center'>
          <button>Online</button>
          <p>
            Play online, access classic NES™ and Super NES™ games, and more with
            a Nintendo Switch Online membership.
          </p>
          <span className='flex'>
            <p>This game supports:</p>
            <ul className='flex'>
              <li>
                <a href="#">Online Play</a>
              </li>
              <li>
                <a href="#">Save Data Cloud</a>
              </li>
            </ul>
          </span>
          <button>Learn more</button>
        </div>
        <div>
          <h2>More like this</h2>
          <div className='flex gap-12'>
            <div>
              <div>
                <img src="" alt="" />
              </div>
              <div>
                <span>
                  <h3>My Time at Portia</h3>
                  <p>4/16/19</p>
                </span>
                <span>
                  <p>$29.99</p>
                  <span className='space-between'>
                    <p>Nintendo Switch</p>
                    <p>Love</p>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p>
            WARNING: If you have epilepsy or have had seizures or other unusual
            reactions to flashing lights or patterns, consult a doctor before
            playing video games. All users should read the Health and Safety
            Information available in the system settings before using this
            software.
          </p>
          <p>
            Nintendo Switch Online membership (sold separately) and Nintendo
            Account required for online play. Not available in all countries.
            Internet access required for online features. Terms apply.
            nintendo.com/switch-online
          </p>
          <p>
            Stardew Valley © ConcernedApe LLC 2016-2020. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}

export default MoreLikeThis