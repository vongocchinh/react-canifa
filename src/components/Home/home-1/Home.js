import React from "react";
import "./styles.scss";

import Product from "./../../../asset/product/13-405x516.png";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
var data = [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];
AOS.init();
const showData = (data) => {
  var result = null;
  result = data.map((value, key) => {
    return (
      <Grid className="product-home" key={key}>
        <div className="layout-product-img">
          <div
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
            className="layout-product-img-img-home"
          >
            <img alt="###" src={Product} />
          </div>
          <div className="product-option-layout">
            <div className="product-hover-option-layout">
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
      </Grid>
    );
  });
  return result;
};
function Home() {
  return (
    <>
      <div className="container-body">
        <div className="container">
          <div className="container-body-layout">
            <div className="container-body-text">
              <h1
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="10"
                data-aos-duration="700"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                className="h1-body"
              >
                THE BIGGEST
              </h1>
              <div data-aos="fade-up">
                <h3>SALE OF THE DAY</h3>
              </div>
              <div  className="button-res">
                <a href="#container-2" id="about">
                  SHOP WOMEN
                </a>
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
            <Grid item className="root">
              <Grid container justify="center" spacing={2}>
                {showData(data)}
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
