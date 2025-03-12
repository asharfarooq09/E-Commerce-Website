import React, { useContext, useEffect, useState } from "react";
import "./productDisplay.css";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductDisplay = ({ product }) => {
  const { AddtoCart, cartadditem } = useContext(ShopContext);
  const [isLoading, setIsLoading] = useState(true);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(()=> {
    if(cartadditem.some((item)=>item.id === product.id)){
        setIsAdded(true)
    }
  },[cartadditem,product.id])

  const handleAddToCart = () => {
      if (!isAdded) {
        AddtoCart({ ...product, quantity: 1 });
        setIsAdded(true);
    }
  };

  if (isLoading || !product) {
    return (
      <div className="productContainer">
        <div className="productdisplay">
          <div className="productdisplay-image">
            <div className="side-images">
              {Array(4)
                .fill()
                .map((_, i) => (
                  <Skeleton key={i} height={80} width={80} />
                ))}
            </div>
            <div className="main-image">
              <Skeleton height={300} width={300} />
            </div>
          </div>

          <div className="productdisplay-details">
            <h2>
              <Skeleton width={200} height={30} />
            </h2>
            <div className="details-review">
              <Skeleton width={150} height={20} />
            </div>
            <div className="details-price">
              {Array(2)
                .fill()
                .map((_, i) => (
                  <Skeleton key={i} width={100} height={20} />
                ))}
            </div>
            <p className="details-detail">
              {Array(2)
                .fill()
                .map((_, i) => (
                  <Skeleton key={i} width={`${80 - i * 20}%`} height={15} />
                ))}
            </p>
            <div className="details-size-addtocart">
              <h3>
                <Skeleton width={120} height={20} />
              </h3>
              <ul className="sizes">
                {["S", "M", "L", "XL", "XXL"].map((size, i) => (
                  <Skeleton key={i} width={40} height={30} />
                ))}
              </ul>
              <Skeleton width={200} height={40} />
            </div>
            <p className="category">
              <Skeleton width={150} height={20} />
            </p>
            <p className="tags">
              <Skeleton width={120} height={20} />
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="productContainer">
      <div className="productdisplay">
        <div className="productdisplay-image">
          <div className="side-images">
            {Array(4)
              .fill()
              .map((_, i) => (
                <img key={i} src={product.image} alt={`Side ${i}`} />
              ))}
          </div>
          <div className="main-image">
            <img src={product.image} alt="Main" />
          </div>
        </div>

        <div className="productdisplay-details">
          <h2>{product.name}</h2>
          <div className="details-review">
            {Array(4)
              .fill()
              .map((_, i) => (
                <img key={i} src={star_icon} alt="Star" />
              ))}
            <img src={star_dull_icon} alt="Dull Star" />
            <span>(122)</span>
          </div>
          <div className="details-price">
            <p className="new_price">$ {product.new_price}</p>
            <p className="old_price">$ {product.old_price}</p>
          </div>
          <p className="details-detail">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, et autem vitae possimus quo quibusdam sed minus magni.
          </p>
          <div className="details-size-addtocart">
            <h3>Selected-size</h3>
            <ul className="sizes">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <li key={size}>{size}</li>
              ))}
            </ul>
            <button
              onClick={handleAddToCart}
              className="addtocart"
              disabled={isAdded}
            >
              {isAdded ? "Added" : "Add to Cart"}
            </button>
          </div>
          <p className="category">
            <span>Category :</span> Women, T-shirt, Crop Top
          </p>
          <p className="tags">
            <span>Tags :</span> Modern, Latest
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
