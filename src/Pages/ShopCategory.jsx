import React, { useContext, useState, useEffect } from "react";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import dropdown_icon from "../Components/assets/dropdown_icon.png";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "./CSS/ShopCategory.css";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="shop-category">
      {isLoading ? (
        <Skeleton height={200} width="80vw" />
      ) : (
        <img className="banner" src={props.banner} alt="Shop Banner" />
      )}

      <div className="shop-category-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shop-category-sort">
          Sort by <img src={dropdown_icon} alt="Sort" />
        </div>
      </div>

      <div className="shop-category-products">
        {isLoading
          ? Array(12)
              .fill(0)
              .map((_, index) => (
                <Skeleton
                  key={index}
                  height={300}
                  width={220}
                  style={{ margin: "10px" }}
                />
              ))
          : all_product.map((item, i) => {
              if (props.category === item.category) {
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
              } else {
                return null;
              }
            })}
      </div>

      {!isLoading && (
        <button className="shop-category-loadmore-btn">Explore more</button>
      )}
    </div>
  );
};

export default ShopCategory;
