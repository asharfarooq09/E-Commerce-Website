import React from "react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <Link to={`/product/${props.id}`} onClick={window.scroll(0, 0)}>
      <div className="item">
        <img src={props.image} alt="" />
        <p className="name">{props.name}</p>
        <div className="item-prices">
          <div className="item-price-new">${props.new_price}</div>
          <div className="item-price-old">${props.old_price}</div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
