import React from "react";
import { Link } from "react-router-dom";
import PersonIcon from "@material-ui/icons/Person";
import LockIcon from "@material-ui/icons/Lock";
import { useForm } from "react-hook-form";
function Form(props) {
  const { register, handleSubmit, errors, reset } = useForm();
  // const [userName, setUserName] = useState("");
  // const [passWord, setPassWord] = useState("");
  // const [passWordConfirm, setPassWordConfirm] = useState("");
  const onSubmit = (e) => {
   props.RegisterForm(e);
    reset();
  };
  const onChange = (e) => {
    // setUserName(e.target.value);
    // setPassWord(e.target.value);
    // setPassWordConfirm(e.target.value);
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
            <span className="error-input">
              Vui Lòng Nhâp Thông Tin UserName
            </span>
          )}
          <div className="layout-input-login">
            <LockIcon className="LockIcon" />
            <input
              ref={register({ required: true })}
              onChange={onChange}
              className="input-login"
              type="password"
              placeholder="Enter Password"
              name="passWord"
            />
          </div>
          {errors.passWord && (
            <span className="error-input">
              Vui Lòng Nhâp Thông Tin PassWord
            </span>
          )}
          <div className="layout-input-login">
            <LockIcon className="PersonIcon" />
            <input
              onChange={onChange}
              ref={register({ required: true })}
              className="input-login"
              type="text"
              placeholder="Enter PassWord Confirm"
              name="passWordConfirm"
            />
          </div>
          {errors.passWordConfirm && (
            <span className="error-input">
              Vui Lòng Nhâp Thông Tin PassWord
            </span>
          )}
          <div className="layout-input-login">
            <div className="layout-input-login-btn">
              <input className="sb-form-login" type="submit" value="Login" />
            </div>
          </div>
          <div className="layout-input-login">
            <div className="layout-input-login-btn">
              <p>
                Bạn đã có tài khoản , đăng nhập{" "}
                <Link className="link-register" to="/login">
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
