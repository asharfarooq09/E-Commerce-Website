import React, { useState, useContext } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import { CiSearch } from "react-icons/ci";
import TemporaryDrawer from "../Drawer/Drawer";

const Navbar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { cartadditem, login, setLogin, menu, setMenu } =
    useContext(ShopContext);

  const handleSearchToggle = () => {
    setIsSearchVisible((prev) => !prev);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    setIsSearchVisible(false);
  };

  return (
    <>
      <div className="navbar">
        <div className="nav-logo-title">
          <TemporaryDrawer />
          <img className="nav-logo" src={logo} alt="Logo" />
          <p className="nav-title">
            <Link to="/">SHOPPER</Link>
          </p>
        </div>
        <ul className="nav-items">
          <li>
            <Link style={{ textDecoration: "none" }} to="/">
              Shop
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/mens">
              Men
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/womens">
              Women
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/kids">
              Kids
            </Link>
          </li>
        </ul>
        <div className="nav-login-cart">
          <CiSearch className="search-icon" onClick={handleSearchToggle} />
          {login && login.islogin === true ? (
            <p className="nav-login" onClick={() => setLogin(false)}>
              <Link style={{ textDecoration: "none" }} to="/login">
                Logout
              </Link>
            </p>
          ) : (
            <p className="nav-login">
              <Link style={{ textDecoration: "none" }} to="/login">
                Login
              </Link>
            </p>
          )}
          <Link to="/cart">
            <img className="nav-cart" src={cart_icon} alt="Cart" />
          </Link>
          <div className="nav-cart-count">{cartadditem.length}</div>
        </div>
      </div>
      <div
        className={`overlay ${isSearchVisible ? "show" : ""}`}
        onClick={() => setIsSearchVisible(false)}
      ></div>
      <div className={`centered-search ${isSearchVisible ? "show" : ""}`}>
        <form className="search-form" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            className="search-input"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-button">
            Search
          </button>
        </form>
      </div>
    </>
  );
};

export default Navbar;
