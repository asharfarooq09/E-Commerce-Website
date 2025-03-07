import React, { useContext } from "react";
import { ShopContext } from "../../../../Context/ShopContext";
import "./CartItems.css";
import CardItem from "../Cart Item/CardItem";
import SubTotal from "../Sub Total/SubTotal";
import NoCart from "../../../../components/assets/product_1.png";

const CartItems = () => {
  const { cartadditem } = useContext(ShopContext);

  return (
    <>
      <div className="cartPage">
        {cartadditem.length > 0 ? (
          <>
            <div className="cart">
              <hr />
              {cartadditem.map((item) => {
                return <CardItem key={item.id} item={item} />;
              })}
            </div>
            <SubTotal />
          </>
        ) : (
          <img className="Nocart" src={NoCart} alt="" />
        )}
      </div>
    </>
  );
};

export default CartItems;
