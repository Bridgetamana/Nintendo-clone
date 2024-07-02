import React from 'react';
import { GoDownload } from "react-icons/go";
import "./TopDrawer.css"

const TopDrawer = () => {
  return (
    <div className='top-drawer-wrapper'>
      <div className='top-drawer'>
        <h4>Stardew Valley</h4>
        <div className='flex gap-12'>
          <span>
            Digital <b>$14.99</b>
          </span>
          <button className="flex gap-12 download-btn">
            <GoDownload fill="rgb(255, 255, 255)" size={20} />
            Direct download
          </button>
        </div>
      </div>
    </div>
  );
}

export default TopDrawer