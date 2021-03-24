import React from "react";
import "./styles.scss";
import Product from "./../../../asset/product/13-405x516.png";

import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
function Home() {
  return (
    <>
      <div className="container-body">
        <div className="container">
          <div className="container-body-layout">
            <div className="container-body-text">
              <h1 data-aos="fade-right"
                        data-aos-offset="200"
                        data-aos-delay="10"
                        data-aos-duration="700"
                        data-aos-easing="ease-in-out"
                        data-aos-mirror="true"
                        data-aos-once="false"
                        // data-aos-anchor-placement="top-center"
                        className="h1-body">THE BIGGEST</h1>
              <div data-aos="fade-up">
                <h3>SALE OF THE DAY</h3>
              </div>
              <h1 className="sale">7O</h1>
              <p className="p1">SAVE UP TO</p>
              <p className="sale-2">%</p>
              <div id="mySidenav" className="sidenav">
                <a href="#container-2" id="about">
                  SHOP WOMEN
                </a>
              </div>
            </div>
          </div>
          <div className="container-product-home">
            <div className="product-home">
              <div className="layout-product-img">
                <div
                  data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="700"
                  data-aos-easing="ease-in-out"
                  className="layout-product-img-img-home"
                >
                  <img alt="###" src={Product} />
                </div>
                <div className="product-option-layout">
                  <div className="option-product-home">
                    <div className="option-detail">
                      <Link to="/user">
                        <i className="fa fa-search" />
                      </Link>
                      <a href="###">
                        <i className="fa fa-shopping-cart" />
                      </a>
                      <a href="###">
                        <i className="fa fa-heart-o" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-title-home">
                  <p>Lorem ipsum dolor sit</p>
                  <div className="title-quantty-product-home">
                    <p>20.000 $</p>
                    <p>
                      <del>20.000</del> $
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-home">
              <div className="layout-product-img">
                <div className="layout-product-img-img-home"
                data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="700"
                  data-aos-easing="ease-in-out">
                  <img alt="###" src={Product} />
                </div>
                <div className="product-option-layout">
                  <div className="option-product-home">
                    <div className="option-detail">
                      <Link to="/user">
                        <i className="fa fa-search" />
                      </Link>
                      <a href="###">
                        <i className="fa fa-shopping-cart" />
                      </a>
                      <a href="###">
                        <i className="fa fa-heart-o" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-title-home">
                  <p>Lorem ipsum dolor sit</p>
                  <div className="title-quantty-product-home">
                    <p>20.000 $</p>
                    <p>
                      <del>20.000</del> $
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-home">
              <div className="layout-product-img">
                <div className="layout-product-img-img-home"
                data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="700"
                  data-aos-easing="ease-in-out">
                  <img alt="###" src={Product} />
                </div>
                <div className="product-option-layout">
                  <div className="option-product-home">
                    <div className="option-detail">
                      <Link to="/user">
                        <i className="fa fa-search" />
                      </Link>
                      <a href="###">
                        <i className="fa fa-shopping-cart" />
                      </a>
                      <a href="###">
                        <i className="fa fa-heart-o" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-title-home">
                  <p>Lorem ipsum dolor sit</p>
                  <div className="title-quantty-product-home">
                    <p>20.000 $</p>
                    <p>
                      <del>20.000</del> $
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="product-home">
              <div className="layout-product-img">
                <div className="layout-product-img-img-home"
                data-aos="fade-up"
                  data-aos-offset="200"
                  data-aos-delay="50"
                  data-aos-duration="700"
                  data-aos-easing="ease-in-out">
                  <img alt="###" src={Product} />
                </div>
                <div className="product-option-layout">
                  <div className="option-product-home">
                    <div className="option-detail">
                      <Link to="/user">
                        <i className="fa fa-search" />
                      </Link>
                      <a href="###">
                        <i className="fa fa-shopping-cart" />
                      </a>
                      <a href="###">
                        <i className="fa fa-heart-o" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="product-title-home">
                  <p>Lorem ipsum dolor sit</p>
                  <div className="title-quantty-product-home">
                    <p>20.000 $</p>
                    <p>
                      <del>20.000</del> $
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
