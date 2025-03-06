import React from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import TemporaryDrawer from "./components/Drawer/Drawer";
import Login from "./components/Login/Login";
import Menu from "./components/Menu/Menu";
import CartLogo from "./components/CartLogo/CartLogo";
import SearchBar from "./components/SearchBar/SearchBar";

const Navbar = () => {
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
        <Menu />
        <div className="nav-login-cart">
          <SearchBar />
          <Login />
          <CartLogo />
        </div>
      </div>
    </>
  );
};

export default Navbar;
