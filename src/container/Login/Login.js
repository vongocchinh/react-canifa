import React from 'react'
import LoginComponent from './../../components/User/login/Login';

function Login(){
    const login=(value)=>{
        console.log(value);
    }
    return(
        <>
        <LoginComponent login={login}/>
        </>
    )
}
export default Login;