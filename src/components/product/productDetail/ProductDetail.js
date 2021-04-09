/* eslint-disable react/jsx-no-duplicate-props */
import React from "react";
import "./styles.scss";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarRatings from "react-star-ratings";
import Reviews from './review/Reviews';

export default function ProductDetail() {
  return (
    <>
      <div className="container" id="add-cart">
        <div className="container-product-detail" >
          <div className="product-detail-layout">
            <div className="product-detail-layout-center">
              <div className="product-detail-layout-center-img">
                <img
                  alt="###"
                  src="https://image.yes24.vn/Upload/catalogcontentbos2019/vanass2019/vat2003-(2).jpg"
                />
              </div>
            </div>
            <div className="product-detail-layout-center">
              <div className="product-detail-layout-center-right">
                <div className="product-detail-layout-center-right-name">
                  <p className="p-name-product-detail">
                    Lorem Ipsum is simply dummy text of of the printing and typesetting industry .  
                  </p>
                </div>
                <div className="product-detail-layout-center-right-name">
                  <StarRatings
                    rating={5}
                    starRatedColor="blue"
                    numberOfStars={5}
                    name="rating"
                    starSpacing="0.5px"
                    starWidthAndHeight="14px"
                    className="StarRatings"
                    starDimension="16px"
                    starRatedColor="#E9E92B"
                  />
                  <p className="quantity-review-name">9999 views</p>
                </div>
                <div className="product-detail-layout-center-right-name">
                  <p>20.00 $ </p>
                </div>
                <div className="product-detail-layout-center-right-name">
                  <p>DESCRIPTION / DETAILS / FIT </p>
                </div>
                <div className="product-detail-layout-center-right-name">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.Lorem Ipsum is simply
                    dummy text of the printing and typesetting industry. Lorem
                    Ipsum is simply dummy text of the printing and typesetting
                    industry.{" "}
                  </p>
                </div>
                <div className="product-detail-layout-center-right-name">
                  <form>
                    <ul id="menu">
                      <li>
                        <a href="###">
                          Size<span className="arrow arrow-down"></span>
                        </a>
                        <ul className="dropdown_menu">
                          <li>
                            <a href="###">SIZE S</a>
                          </li>
                          <li>
                            <a href="###">SIZE M</a>
                          </li>
                          <li>
                            <a href="###">SIZE L</a>
                          </li>
                          <li>
                            <a href="###">SIZE XL</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                    <ul id="menu">
                      <li>
                        <a href="###">
                          Color<span className="arrow arrow-down"></span>
                        </a>
                        <ul className="dropdown_menu">
                          <li>
                            <a href="###">Black</a>
                          </li>
                          <li>
                            <a href="###">White</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </form>
                </div>
                <div className="product-detail-layout-center-right-name">
                  <a href="###">ADD TO CART</a>
                </div>
                <div className="product-detail-layout-center-right-name">
                  <FavoriteBorderIcon />
                  <p>Thêm vào danh sách yêu thích</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="container-small-add-cart-layout">
          <div className="container-small-add-cart-layout-bottom">
            <div className="container-small-add-cart-layout-bottom-img">
              <img
                alt="##"
                src="https://image.yes24.vn/Upload/catalogcontentbos2019/vanass2019/vat2003-(2).jpg"
              />
              <p>Lorem Ipsum is simply dummy text of the printing . </p>
            </div>
            <div className="container-small-add-cart-layout-bottom-img">
              <p>20.00 $</p>
              <a className="button-bottom-add-cart" href="#add-cart">
                Add To Cart
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="container-product-detail">
          <div className="container-option-form-review">
              <Reviews />
          </div>
        </div>
      </div>
    </>
  );
}
