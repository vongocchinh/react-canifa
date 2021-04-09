import React from "react";
import "./styles.scss";


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
            <img alt="###" src="data:image/jpeg;base64,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" />
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
                <a href="#container-2" className="wrapper-btn">
                <button  href="#container-2" id="about">
                SHOP WOMEN
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </button>
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
