import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import data_product from "../assets/data";
import "./RelatedProduct.css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const RelatedProduct = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="related-product">
      <h2>RELATED PRODUCTS</h2>

      <div className="related-product-item">
        {isLoading
          ? Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="skeleton-card">
                <Skeleton height={200} width={200} />
                <Skeleton
                  height={20}
                  width="80%"
                  style={{ marginTop: "10px" }}
                />
                <Skeleton height={15} width="60%" />
              </div>
            ))
          : data_product.map((item, i) => (
              <Item
                key={i}
                id={item.id}
                image={item.image}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            ))}
      </div>
    </div>
  );
};

export default RelatedProduct;
