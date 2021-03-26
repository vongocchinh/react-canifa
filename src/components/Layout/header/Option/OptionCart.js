import React from "react";
import { Link } from "react-router-dom";


function OptionCart() {
  return (
    <>
      <i className="fa fa-shopping-cart" style={{ fontSize: "20px" }}>
        <div className="container-background-cart-hover">
          <div className="container-background-cart-hover-div">
            <div className="triangle-up-option-2" />
            <div className="container-background-cart-hover-1">
              <p>SUBTOTAL :</p>
              <p className="total-view-cart">300.000 vnd</p>
            </div>
            <div className="container-background-cart-hover-2">
              <Link to="/user">VIEWCART</Link>
              <Link to="/user">CHECKOUT</Link>
            </div>
          </div>
        </div>
        <span className="quantity-cart-header">99</span>
      </i>
    </>
  );
}
export default OptionCart;
