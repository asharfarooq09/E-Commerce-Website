import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import star_icon from "../assets/star_icon.png";
import star_dull_icon from "../assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = ({ product }) => {
  const { AddtoCart } = useContext(ShopContext);

  return (
    <div className="productContainer">
      <div className="productdisplay">
        <div className="productdisplay-image">
          <div className="side-images">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
          <div className="main-image">
            <img src={product.image} alt="" />
          </div>
        </div>

        <div className="productdisplay-details">
          <h2>{product.name}</h2>
          <div className="details-review">
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_icon} alt="" />
            <img src={star_dull_icon} alt="" />
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
              <li>S</li>
              <li>M</li>
              <li>L</li>
              <li>XL</li>
              <li>XXl</li>
            </ul>
            {}
            <button
              onClick={() => AddtoCart({ ...product, quantity: 1 })}
              className="addtocart"
            >
              Add to Cart
            </button>
          </div>
          <p className="category">
            <span>Category : </span>Women , T-shirt, Crop Top
          </p>
          <p className="tags">
            <span>Tags : </span>Modern, Latest
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductDisplay;
