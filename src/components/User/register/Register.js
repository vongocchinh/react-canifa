import React from "react";
import "./style.scss";
import FormComponent from './form/Form';

function Register(props) {
  const RegisterForm=(value)=>{
    props.register(value);
  }
  return (
    <>
      <div className="container">
        <div className="container-login">
          <div className="container-login-layout">
            <FormComponent RegisterForm={RegisterForm}/>
          </div>
        </div>
      </div>
    </>
  );
}
export default Register;
