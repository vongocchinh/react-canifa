import React from 'react';
import { Link } from "react-router-dom";
export default function Bar(){
    return (
        <>
                    <div className="product-navbar-layout">
              <p>Bộ Lọc Tìm Kiếm</p>
              <div className="row-item-category-search">
                <span>Theo Hang</span>
                <div className="row-item-category-search-item">
                  <Link className="row-item-card-left" to="/abc">
                    Lorem Ipsum is simply.{" "}
                  </Link>
                  <Link className="row-item-card-left" to="/abc">
                    Lorem Ipsum is simply.{" "}
                  </Link>
                  <Link className="row-item-card-left" to="/abc">
                    Lorem Ipsum is simply.{" "}
                  </Link>
                  <Link className="row-item-card-left" to="/abc">
                    Lorem Ipsum is simply.{" "}
                  </Link>
                  <Link className="row-item-card-left" to="/abc">
                    Lorem Ipsum is simply.{" "}
                  </Link>
                  <Link className="row-item-card-left" to="/abc">
                    Lorem Ipsum is simply.{" "}
                  </Link>
                  <Link className="row-item-card-left" to="/abc">
                    Lorem Ipsum is simply.{" "}
                  </Link>
                </div>
              </div>
              <div className="row-item-category-search">
                <span>Theo Danh Muc</span>
                <div className="row-item-category-search-item">
                  <Link className="row-item-card-left" to="/abc">
                    Lorem Ipsum is simply.{" "}
                  </Link>
                  <Link className="row-item-card-left" to="/abc">
                    Lorem Ipsum is simply.{" "}
                  </Link>
                  <Link className="row-item-card-left" to="/abc">
                    Lorem Ipsum is simply.{" "}
                  </Link>
                  <Link className="row-item-card-left" to="/abc">
                    Lorem Ipsum is simply.{" "}
                  </Link>
                  <Link className="row-item-card-left" to="/abc">
                    Lorem Ipsum is simply.{" "}
                  </Link>
                  <Link className="row-item-card-left" to="/abc">
                    Lorem Ipsum is simply.{" "}
                  </Link>
                  <Link className="row-item-card-left" to="/abc">
                    Lorem Ipsum is simply.{" "}
                  </Link>
                </div>
              </div>
            </div>
        </>
    )
}