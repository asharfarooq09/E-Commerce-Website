import React, { useContext } from "react";
import { Link } from "react-router-dom";
import cart_icon from "../../../assets/cart_icon.png";
import { ShopContext } from "../../../../Context/ShopContext";

const CartLogo = () => {
  const { cartadditem } = useContext(ShopContext);
  return (
    <>
      <div className="cart-logo">
        <Link to="/cart">
          <img className="nav-cart" src={cart_icon} alt="Cart" />
        </Link>
        <div className="nav-cart-count">{cartadditem.length}</div>
      </div>
    </>
  );
};

export default CartLogo;
