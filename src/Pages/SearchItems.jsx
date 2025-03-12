import React, { useContext, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import Item from "../Components/Item/Item";
import "./CSS/SearchItems.css";
import EmptyProduct from "../Components/assets/no_products_found.png";
import { ShopContext } from "../Context/ShopContext";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SearchItems = () => {
  const { query } = useParams();
  const { all_product } = useContext(ShopContext);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [query, all_product]);

  const filteredList = useMemo(() => {
    return all_product.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
  }, [all_product, query]);

  return (
    <div className="search-items-container">
      {isLoading ? (
        <div className="search-items">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="skeleton-card">
              <Skeleton height={200} width={250} />
              <Skeleton height={20} width="80%" />
              <Skeleton height={15} width="60%" />
            </div>
          ))}
        </div>
      ) : filteredList.length > 0 ? (
        <div className="search-items">
          {filteredList.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
      ) : (
        <img className="empty" src={EmptyProduct} alt="No products found" />
      )}
    </div>
  );
};

export default SearchItems;
