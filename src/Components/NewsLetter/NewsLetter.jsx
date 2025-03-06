import React from "react";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <div className="news-letter-container">
      <div className="news-letter">
        <h2>GET EXCLUSIVE Offer On Your Email</h2>
        <p>Subscribe to our newsletter and stay updated</p>
        <div className="email-input-btn">
          <input type="email" placeholder="Your email id" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
