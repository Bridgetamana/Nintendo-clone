import React, { useEffect, useState } from "react";
import { GoDownload } from "react-icons/go";
import "./TopDrawer.css";

const TopDrawer = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`top-drawer-wrapper ${visible ? "visible" : ""}`}>
      <div className="top-drawer">
        <h4>Stardew Valley</h4>
        <div className="flex gap-12">
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
};

export default TopDrawer;
