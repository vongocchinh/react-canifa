import React from "react";
import LOGO from "./../../../asset/logo1.png";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonIcon from "@material-ui/icons/Person";
import { Link } from "react-router-dom";
import "./styles.scss";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();
function Header() {
  const [onMenu, setOnMenu] = useState(false);
  const onClickOpen = () => {
    setOnMenu(!onMenu);
  };
  return (
    <>
      <div className="container-header">
        <div className="container">
          <div className="row-header-top">
            <div className="row-column-header-top">
              <Link to="/">
                <img
                  src={LOGO}
                  alt="###"
                  className="img-logo-row-column-header-top"
                />
              </Link>
            </div>
            <div className="row-column-header-top">
              <div className="row-column-header-top-right">
                <form className="layout-row-column-header-top-right">
                  <div
                    onClick={onClickOpen}
                    className="button-row-column-header-top"
                  >
                    <i className="material-icons w3-xlarge">menu</i>
                    {onMenu ? (
                      <div
                        data-aos="fade-up"
                        data-aos-offset="200"
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out"
                        className="menu-button-header-hover"
                      >
                        <div>
                          <Link to="/user">product-option-layout</Link>
                        </div>
                        <div>
                          <Link to="/user">product-option-layout</Link>
                        </div>
                        <div>
                          <Link to="/user">product-option-layout</Link>
                        </div>
                        <div>
                          <Link to="/user">product-option-layout</Link>
                        </div>
                        <div>
                          <Link to="/user">product-option-layout</Link>
                        </div>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="input-row-column-header-top">
                    <input
                      placeholder="Search..."
                      type="text"
                      className="search-header"
                    />
                  </div>
                  <div className="search-row-column-header-top">
                    <i className="fa fa-search" />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="row-header-bottom">
            <div className="row-header-bottom-button">
              <ul>
                <li>
                  <Link to="/" className="active">
                    HOME
                  </Link>
                </li>
                <li className="CROSS-BODY">
                  CROSSBODY
                  <div className="CROSS-BODY-hover-button">
                    <div className="triangle-up" />
                    <div className="CROSS-BODY-hover-button-column">
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                    </div>
                    <div className="CROSS-BODY-hover-button-column">
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                    </div>
                    <div className="CROSS-BODY-hover-button-column">
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                    </div>
                  </div>
                </li>
                <li className="CROSS-BODY">
                  SATCHEL TOTES
                  <div className="CROSS-BODY-hover-button">
                    <div className="triangle-up" />
                    <div className="CROSS-BODY-hover-button-column">
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                    </div>
                    <div className="CROSS-BODY-hover-button-column">
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                    </div>
                    <div className="CROSS-BODY-hover-button-column">
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                      <p>
                        <Link to="/user">container-background</Link>
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <Link to="/user">BLOG LIST</Link>
                </li>
                <li>
                  <Link to="/user">CART</Link>
                </li>
                <li>
                  <Link to="/user">CHECKOUT</Link>
                </li>
                <li>
                  <Link to="/user">CONTACT</Link>
                </li>
              </ul>
            </div>
            <div className="row-header-bottom-single">
              <div className="icon-row-header-bottom-single">
                <i className="fa fa-user" style={{ fontSize: "20px" }}>
                  <div className="container-background-user-hover">
                    <div className="container-background-user-hover-div">
                      <div className="triangle-up-option" />
                      <Link to="/user">
                        <AccountCircleIcon className="icon-option-header" />{" "}
                        <div className="my-text">My Account</div>
                      </Link>
                      <Link to="/user">
                        <FavoriteBorderIcon className="icon-option-header" />
                        <div className="my-text">My WishList</div>
                      </Link>
                      <Link to="/user">
                        <CheckCircleOutlineIcon className="icon-option-header" />
                        <div className="my-text">CheckOut</div>
                      </Link>
                      <Link to="/user">
                        <PersonIcon className="icon-option-header" />
                        <div className="my-text">Login</div>
                      </Link>
                    </div>
                  </div>
                </i>
                <i className="fa fa-shopping-cart" style={{ fontSize: "20px" }}>
                  <div className="container-background-cart-hover">
                    <div className="container-background-cart-hover-div">
                      <div className="triangle-up-option-2" />
                      <div className="container-background-cart-hover-1">
                        <p>SUBTOTAL :</p>
                        <p className="total-view-cart">300.000 vnd</p>
                      </div>
                      <div className="container-background-cart-hover-2">
                        <Link to="/user">VIEWCART</Link>
                        <Link to="/user">CHECKOUT</Link>
                      </div>
                    </div>
                  </div>
                  <span className="quantity-cart-header">99</span>
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header;
