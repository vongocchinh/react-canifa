import React from "react";
import "./style.scss";
import FormComponent from './form/Form';

function Login(props) {
  const loginForm=(value)=>{
    props.login(value);
  }
  return (
    <>
      <div className="container">
        <div className="container-login">
          <div className="container-login-layout">
            <FormComponent loginForm={loginForm}/>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
