import React from "react";
import "./Hero.css";
import Hand_icon from "../assets/hand_icon.png";
import arrow_icon from "../assets/arrow.png";
import hero_image from "../assets/hero_image.png";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero">
        <div className="hero-left-side">
          <h2>NEW ARRIVALS ONLY</h2>
          <div className="hero-hand-img">
            <p className="paragraph">new</p>
            <img src={Hand_icon} alt="" />
          </div>
          <p className="paragraph">collections</p>
          <p className="paragraph">for everyone</p>
          <div className="latest-btn">
            <p>Latest Collection</p>
            <img src={arrow_icon} alt="" />
          </div>
        </div>
        <div className="hero-right-side">
          <img src={hero_image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
