import React from 'react';
import RegisterComponent from './../../components/User/register/Register';

function Register(){
    const register=(value)=>{
        console.log(value);
    }
    return (
        <>
            <RegisterComponent register={register}/>
        </>
    )
}
export default Register;