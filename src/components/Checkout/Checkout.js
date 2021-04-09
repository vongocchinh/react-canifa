import React from "react";
import "./styles.scss";
export default function Checkout() {
  return (
    <>
      <div className="container">
        <div className="container-layout-checkout">
          <form className="container-layout-checkout-checkout">
              <div className="container-layout-checkout-checkout-column">
                  <p>Thông Tin Mua Hàng</p>
                  <input placeholder="Email" />
                  <input placeholder="Email" />
                  <input placeholder="Email" />
                  <input placeholder="Email" />
                  <input placeholder="Email" />
                  <input placeholder="Email" />
                  <input placeholder="Email" />
              </div>
              <div className="container-layout-checkout-checkout-column">
                  <p>Vận Chuyển</p>
                  <div>
                    <input placeholder="Nhập Thông Tin Đơn Hàng" />
                  </div>
                  <div>
                      <p>Thanh Toán</p>
                      <p>Thanh Toán Khi Nhân Hàng (Free Code)</p>
                  </div>
              </div>
              <div className="container-layout-checkout-checkout-column">
                  <p>Đơn Hàng (0 sản phẩm)</p>
                  <div>
                      <div className="table-product-detail-checkout">
                          <p>San pham gi do cmn ontainer-layout-checkout-checkout-column</p>
                          <p>9</p>
                          <p>20000000$</p>
                      </div>
                      <div className="table-product-detail-checkout">
                          <p>San pham gi do cmn ontainer-layout-checkout-checkout-column</p>
                          <p>9</p>
                          <p>20000000$</p>
                      </div>
                      <div className="table-product-detail-checkout">
                          <p>San pham gi do cmn ontainer-layout-checkout-checkout-column</p>
                          <p>9</p>
                          <p>20000000$</p>
                      </div>
                      <div className="table-product-detail-checkout">
                          <p>San pham gi do cmn ontainer-layout-checkout-checkout-column</p>
                          <p>9</p>
                          <p>20000000$</p>
                      </div>
                      <div className="table-product-detail-checkout">
                          <p>San pham gi do cmn ontainer-layout-checkout-checkout-column</p>
                          <p>9</p>
                          <p>20000000$</p>
                      </div>
                      <div className="table-product-detail-checkout">
                          <p>San pham gi do cmn ontainer-layout-checkout-checkout-column</p>
                          <p>9</p>
                          <p>20000000$</p>
                      </div>
                      <div className="table-product-detail-checkout">
                          <p>San pham gi do cmn ontainer-layout-checkout-checkout-column</p>
                          <p>9</p>
                          <p>20000000$</p>
                      </div>
                      <div className="table-product-detail-checkout">
                          <p>San pham gi do cmn ontainer-layout-checkout-checkout-column</p>
                          <p>9</p>
                          <p>20000000$</p>
                      </div>
                      
                  </div>
                  <div>
                      <input placeholder="Nhập mã giảm giá"/>
                      <input type="submit" value="xác nhận"/>
                  </div>
                  <div>
                      <p>Tổng cộng</p>
                      <p>36.000.000 đ</p>
                  </div>
                  <div>
                      <input type="submit" value="Đặt Hàng"/>
                  </div>
              </div>
          </form>
        </div>
      </div>
    </>
  );
}
