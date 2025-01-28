import React from "react";
import "./Footer.css";
import logo_big from "../assets/logo_big.png";
import pintester_icon from "../assets/pintester_icon.png";
import whatsapp_icon from "../assets/whatsapp_icon.png";
import instagram_icon from "../assets/instagram_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo-title">
        <img src={logo_big} alt="" />
        <h2>SHOPPER</h2>
      </div>
      <ul className="footer-items">
        <li>Company</li>
        <li>Products</li>
        <li>Offers</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-logo">
        <img src={whatsapp_icon} alt="" />
        <img src={instagram_icon} alt="" />
        <img src={pintester_icon} alt="" />
      </div>
      <hr />
      <p>Copyright @ 2024 - All Right Reserved</p>
    </div>
  );
};

export default Footer;
