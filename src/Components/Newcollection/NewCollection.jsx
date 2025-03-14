import React from "react";
import new_collections from "../assets/new_collections";
import Item from "../Item/Item";
import "./NewCollection.css";

const NewCollection = () => {
  return (
    <div className="new-collections">
      <h2>NEW COLLECTIONS</h2>
      <div className="collections">
        {new_collections.map((item, i) => {
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

export default NewCollection;
