import React from "react";
import { Link } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import { useForm } from "react-hook-form";

function Form(props) {
  const { errors, register, handleSubmit, reset } = useForm();
  const onSubmit = (e) => {
    props.loginForm(e);
    reset();
    // e.preventDefault();
    // props.loginForm({
    //     userName,passWord
    // });

    // setPassWord("");
    // setUserName("");
    // e.target.reset();
  };
  const onChange = (e) => {
    // setUserName(e.target.value);
    // setPassWord(e.target.value);
  };
  return (
    <>
      <form method="post" onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <div className="img-container-login">
          <img
            src="https://canifa.7uptheme.net/wp-content/uploads/2015/11/page1-img5.jpg"
            alt="Avatar"
            className="avatar"
          />
        </div>
        <div className="container-form-img">
          <div className="layout-input-login">
            <PersonIcon className="PersonIcon" />
            <input
              onChange={onChange}
              ref={register({ required: true })}
              className="input-login"
              type="text"
              placeholder="Enter Username"
              name="userName"
            />
          </div>
          {errors.userName && (
            <span className="error-input">Vui long nhap thông tin .</span>
          )}
          <div className="layout-input-login">
            <LockIcon className="LockIcon" />
            <input
            ref={register({ required: true ,minLength:8})}
              onChange={onChange}
              className="input-login"
              type="password"
              placeholder="Enter Password"
              name="passWord"
            />
          </div>
          {errors.passWord && (
            <span className="error-input">Vui long nhap thông tin .</span>
          )}
          <div className="layout-input-login">
            <div className="layout-input-login-btn">
              <input className="sb-form-login" type="submit" value="Login" />
            </div>
          </div>
          <div className="layout-input-login">
            <div className="layout-input-login-btn">
              <p>
                Bạn đã có tài khoản chưa , đăng ký{" "}
                <Link className="link-register" to="/register">
                  tại đây .
                </Link>{" "}
              </p>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
export default Form;
