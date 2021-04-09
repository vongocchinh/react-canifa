import React from "react";
import "./style.scss";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import EmailIcon from "@material-ui/icons/Email";

import ReceiptIcon from "@material-ui/icons/Receipt";
import HistoryIcon from "@material-ui/icons/History";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ErrorOutlineIcon from "@material-ui/icons/ErrorOutline";
import { Link } from "react-router-dom";
import LockIcon from '@material-ui/icons/Lock';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

import UserImages from './Detail/userImages/UserImages';
import RouterUser from './../../../router/RouterUser';

function User() {
  return (
    <>
      <div className="container">
        <div className="container-user-detail">
          <div className="container-user-detail-layout">
            <div className="container-user-detail-left">
              <div className="user-detail-img">
                <UserImages/>
                <div className="item-menu-left-user-contact">
                  <div className="user-detail-img-phone">
                    <PhoneAndroidIcon className="PhoneAndroidIcon" />
                    <p>+84 763 717 084</p>
                  </div>
                  <div className="user-detail-img-phone">
                    <EmailIcon className="PhoneAndroidIcon" />
                    <p>Ngocchinh1410@gmail.com</p>
                  </div>
                  <div className="user-detail-img-phone">
                    <ReceiptIcon className="PhoneAndroidIcon" />
                    <p className="title-detail-bill-name">
                      <Link to="/user/bill">Đơn Hàng Đã Thanh Toán</Link>
                    </p>
                  </div>
                  <div className="user-detail-img-phone">
                    <HistoryIcon className="PhoneAndroidIcon" />
                    <p className="title-detail-bill-name">
                      <Link to="/user">Lich Sử Giao Dịch</Link>
                    </p>
                  </div>
                  <div className="user-detail-img-phone">
                    <FavoriteIcon className="PhoneAndroidIcon" />
                    <p className="title-detail-bill-name">
                      <Link to="/user">Sản Phẩm Yêu Thích</Link>
                    </p>
                  </div>
                  <div className="user-detail-img-phone">
                    <ShoppingCartIcon className="PhoneAndroidIcon" />
                    <p className="title-detail-bill-name">
                      <Link to="/user">Giỏ Hàng Của Bạn</Link>
                    </p>
                  </div>
                  <div className="user-detail-img-phone">
                    <ErrorOutlineIcon className="PhoneAndroidIcon" />
                    <p className="title-detail-bill-name">
                      <Link to="/user">Sản Phẩm Đã Hủy</Link>
                    </p>
                  </div>
                  <div className="user-detail-img-phone">
                    <AccountBalanceIcon className="PhoneAndroidIcon" />
                    <p className="title-detail-bill-name">
                      <Link to="/user/bank">Ngân Hàng</Link>
                    </p>
                  </div>
                  <div className="user-detail-img-phone">
                    <LockIcon className="PhoneAndroidIcon" />
                    <p className="title-detail-bill-name">
                      <Link to="/user/password">Đổi Mật Khẩu</Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-user-detail-right">
              <div className="ctn-mt">
                <div className="container-user-detail-right-layouts">
                  <div className="container-user-detail-right-layouts-top">
                    <div className="container-user-detail-right-layouts-top-btn">
                      <Link className="btn-edit-user" to="/edit">
                        Chỉnh sửa
                      </Link>
                    </div>
                  </div>
                </div>
                  <RouterUser />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default User;
