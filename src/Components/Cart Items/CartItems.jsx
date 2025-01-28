import React, { useContext, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import "./CartItems.css";
import CardItem from "../Card Item/CardItem";
import SubTotal from "../Sub Total/SubTotal";

const CartItems = () => {
  const { cartadditem } = useContext(ShopContext);

  return (
    <>
      <div className="cart">
        <hr />
        {cartadditem.map((item) => {
          return <CardItem key={item.id} item={item} />;
        })}
      </div>
      {cartadditem.length > 0 && <SubTotal />}
    </>
  );
};

export default CartItems;
