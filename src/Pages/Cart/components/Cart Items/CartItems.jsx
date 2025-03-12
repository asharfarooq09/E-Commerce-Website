import React, { useContext, useEffect } from "react";
import { ShopContext } from "../../../../Context/ShopContext";
import "./CartItems.css";
import CardItem from "../Cart Item/CartItem";
import SubTotal from "../Sub Total/SubTotal";
import EmptyCart from "../../../../Components/assets/no_products_found.png";

const CartItems = () => {
  const { cartadditem, setcartadditem } = useContext(ShopContext);

  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      setcartadditem(JSON.parse(savedCart));
    }
  }, [setcartadditem]);

  return (
    <div className="cartPage">
      {cartadditem.length > 0 ? (
        <>
          <div className="cart">
            <hr />
            {cartadditem.map((item) => (
              <CardItem key={item.id} item={item} />
            ))}
          </div>
          <SubTotal />
        </>
      ) : (
        <img src={EmptyCart} />
      )}
    </div>
  );
};

export default CartItems;
