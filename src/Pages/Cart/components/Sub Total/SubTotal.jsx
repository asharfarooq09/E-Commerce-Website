import React, { useContext } from "react";
import "./SubTotal.css";
import { ShopContext } from "../../../../Context/ShopContext";

const SubTotal = () => {
  const { getTotalAmount } = useContext(ShopContext);
  return (
    <div className="card-total">
      <h2>Card Totals</h2>
      <div className="total-amount">
        <div className="sub-total">
          <p>Subtotal</p>
          <p>${getTotalAmount()}</p>
        </div>
        <hr />
        <div className="shipping">
          <p>Shipping Free</p>
          <p>Free</p>
        </div>
        <hr />
        <div className="total">
          <p>Total</p>
          <p>${getTotalAmount()}</p>
        </div>
        <button>PROCEED TO CHECKOUT</button>
      </div>
    </div>
  );
};

export default SubTotal;
