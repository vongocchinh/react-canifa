import React from "react";
import "./styles.scss";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import data from "./../home-1/data.json";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
function Home() {
  return (
    <>
      <div id="container-2" className="container-body-two img-container-2">
        <div className="container">
          <p className="container-body-two-title">Let's talk product</p>
          <div className="container-body-layout-des">
            <p className="container-body-two-des">
              This is the paragraph where you can write more details about your
              product. Keep you user engaged by providing meaningful
              information. Remember that by this time, the user is curious,
              otherwise he wouldn't scroll to get here. Add a button if you want
              the user to see more.
            </p>
          </div>
          <div className="container-body-layout-btn">
            <div className="share-button">
              <span>Share Me</span>
              <a href="###">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="##">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="##">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="##">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="container-product-home container-product-two-home">
            <Grid item className="root">
              <Grid container justify="center" spacing={2}>
                {showData(data)}
              </Grid>
            </Grid>
          </div>
          <div className="container-body-layout-btn">
            <a href="#container-3" className="btn-see-more-body-two">
              <ArrowForwardIosIcon className="ArrowForwardIosIcon"/>
              SEE MORES
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
const showData = (data) => {
  var result = null;
  result = data.map((value, key) => {
    return (
      <Grid className="product-home" key={key}>
        <div className="layout-product-img">
          <div
            data-aos="fade-up-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="700"
            data-aos-easing="ease-in-out"
            className="layout-product-img-img-home"
          >
            <img alt="###" src={value.imagesProduct} />
          </div>
          <div className="product-option-layout">
            <div className="product-hover-option-layout">
              <div className="option-product-home">
                <div className="option-detail">
                  <Link to="/product">
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
            <p>{value.nameProduct}</p>
            <div className="title-quantty-product-home">
              <p>{value.saleProduct} $</p>
              <p>
                <del>{value.priceProduct}</del> $
              </p>
            </div>
          </div>
        </div>
      </Grid>
    );
  });
  return result;
};
export default Home;
