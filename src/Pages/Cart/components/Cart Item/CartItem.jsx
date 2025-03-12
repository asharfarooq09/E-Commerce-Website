import React, { useContext } from "react";
import "./CartItem.css";
import { ShopContext } from "../../../../Context/ShopContext";
import remove_icon from "../../../../Components/assets/cart_cross_icon.png";

const CardItem = ({ item }) => {
  const { cartadditem, RemovetoCart, replaceCart } = useContext(ShopContext);

  const handleQuantity = (type) => {
    const increment = type === "increment" ? 1 : -1;

    const index = cartadditem.findIndex((product) => product.id === item.id);
    console.log(index);
    
    if (index < 0) return;

    const quan = cartadditem[index].quantity + increment;

    cartadditem[index] = {
      ...cartadditem[index],
      quantity: quan < 1 ? 1 : quan,
    };
    replaceCart(cartadditem);
  };

  return (
    <div className="cart-items" key={item.id}>
      <img src={item.image} alt="" />
      <p className="name">{item.name}</p>
      <p>${item.new_price}</p>
      <div className="quantity">
        <button onClick={() => handleQuantity("increment")}>+</button>
        <input type="text" value={item.quantity} readOnly />
        <button onClick={() => handleQuantity("")} disabled={item.quantity===1}>-</button>
      </div>
      <p>${item.new_price * item.quantity}</p>
      <img onClick={() => RemovetoCart(item.id)} src={remove_icon} alt="" />
    </div>
  );
};

export default CardItem;
