import React, { useContext } from "react";
import Item from "../Item/Item";
import data_product from "../assets/data";
import "./RelatedProduct.css";

const RelatedProduct = () => {
  return (
    <div className="related-product">
      <h2>RELATED PRODUCTS</h2>

      <div className="related-product-item">
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

export default RelatedProduct;
