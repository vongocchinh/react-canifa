import React from 'react';
import { Link } from 'react-router-dom';

function Menu(){
    return (
<div className="row-header-bottom-button">
              <ul>
                <li>
                  <Link to="/" className="active">
                    Trang Chủ
                  </Link>
                </li>
                <li className="CROSS-BODY">
                  Danh Mục
                  <div className="CROSS-BODY-hover-button">
                    <div className="triangle-up" />
                    <div className="CROSS-BODY-hover-button-column">
                      <p>
                        <Link to="/user">Danh Mục Sản Phẩm 1</Link>
                      </p>
                      <p>
                        <Link to="/user">Danh Mục Sản Phẩm 1</Link>
                      </p>
                      <p>
                        <Link to="/user">Danh Mục Sản Phẩm 1</Link>
                      </p>
                      <p>
                        <Link to="/user">Danh Mục Sản Phẩm 1</Link>
                      </p>
                      <p>
                        <Link to="/user">Danh Mục Sản Phẩm 1</Link>
                      </p>
                    </div>
                    <div className="CROSS-BODY-hover-button-column">
                      <p>
                        <Link to="/user">Danh Mục Sản Phẩm 1</Link>
                      </p>
                      <p>
                        <Link to="/user">Danh Mục Sản Phẩm 1</Link>
                      </p>
                      <p>
                        <Link to="/user">Danh Mục Sản Phẩm 1</Link>
                      </p>
                      <p>
                        <Link to="/user">Danh Mục Sản Phẩm 1</Link>
                      </p>
                      <p>
                        <Link to="/user">Danh Mục Sản Phẩm 1</Link>
                      </p>
                    </div>
                    <div className="CROSS-BODY-hover-button-column">
                      <p>
                        <Link to="/user">Danh Mục Sản Phẩm 1</Link>
                      </p>
                      <p>
                        <Link to="/user">Danh Mục Sản Phẩm 1</Link>
                      </p>
                      <p>
                        <Link to="/user">Danh Mục Sản Phẩm 1</Link>
                      </p>
                    </div>
                  </div>
                </li>
                <li className="CROSS-BODY">
                  Sản Phẩm
                  <div className="CROSS-BODY-hover-button">
                    <div className="triangle-up" />
                    <div className="CROSS-BODY-hover-button-column">
                      <p>
                        <Link to="/user">Sản Phẩm Ưa Chuộn 1</Link>
                      </p>
                      <p>
                        <Link to="/user">Sản Phẩm Ưa Chuộn 1</Link>
                      </p>
                    </div>
                    <div className="CROSS-BODY-hover-button-column">
                      <p>
                        <Link to="/user">Sản Phẩm Ưa Chuộn 1</Link>
                      </p>
                      <p>
                        <Link to="/user">Sản Phẩm Ưa Chuộn 1</Link>
                      </p>
                      <p>
                        <Link to="/user">Sản Phẩm Ưa Chuộn 1</Link>
                      </p>
                      <p>
                        <Link to="/user">Sản Phẩm Ưa Chuộn 1</Link>
                      </p>
                      <p>
                        <Link to="/user">Sản Phẩm Ưa Chuộn 1</Link>
                      </p>
                    </div>
                    <div className="CROSS-BODY-hover-button-column">
                      <p>
                        <Link to="/user">Sản Phẩm Ưa Chuộn 1</Link>
                      </p>
                      <p>
                        <Link to="/user">Sản Phẩm Ưa Chuộn 1</Link>
                      </p>
                      <p>
                        <Link to="/user">Sản Phẩm Ưa Chuộn 1</Link>
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <Link to="/user">Yêu Thích</Link>
                </li>
                <li>
                  <Link to="/cart">Giỏ Hàng</Link>
                </li>
                <li>
                  <Link to="/checkout">Thanh Toán</Link>
                </li>
                <li>
                  <Link to="/product">Liên Hệ</Link>
                </li>
              </ul>
            </div>
    )
}
export default Menu;