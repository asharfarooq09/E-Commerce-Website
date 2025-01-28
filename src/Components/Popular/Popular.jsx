import React from "react";
import "./Popular.css";
import data_product from "../assets/data";
import Item from "../Item/Item";

const Popular = () => {
  return (
    <div className="popular">
      <h2>POPULAR IN WOMEN</h2>

      <div className="popular-item">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              image={item.image}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
