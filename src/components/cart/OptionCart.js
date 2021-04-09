import React from "react";
export default function OptionCart() {
  return (
    <>
      <div className="option-cart-container">
        <table>
          <tbody>
            <tr>
              <th>Tổng Sản phẩm</th>
              <td>999</td>
            </tr>
            <tr>
              <th>Tổng tiền</th>
              <td>999,999,999 đ</td>
            </tr>
          </tbody>
        </table>
        <div>
          <a className="option-bill" href="###">
            Thanh Toán
          </a>
        </div>
      </div>
    </>
  );
}
