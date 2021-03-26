import React from "react";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import PersonIcon from "@material-ui/icons/Person";
function OptionUser() {
  return (
    <>
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
    </>
  );
}
export default OptionUser;
