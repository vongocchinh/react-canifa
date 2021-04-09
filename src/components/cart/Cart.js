import React from "react";
import "./style.scss";
import CartItem from "./CartItem";
import OptionCart from "./OptionCart";

function Cart() {
  return (
    <>
      <div className="container">
        <div className="container-cart-layout">
          <div className="container-cart">
            <table className="container-cart-table">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Tên sản phẩm</th>
                  <th>Ảnh sản phẩm</th>
                  <th>Giá</th>
                  <th>Số lượng</th>
                  <th>Tổng tiền</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <CartItem />
              </tbody>
            </table>
            <div className="option-cart">
              <OptionCart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Cart;
