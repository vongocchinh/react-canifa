import React from 'react'
import './style.scss';
import { useForm } from 'react-hook-form';
function PassWord(){
    const {handleSubmit,reset,register}=useForm();
    const onsubmit=(e)=>{
        console.log(e);
        reset();
    }
    return (
        <>
        <div className="container-password">
            <form className="container-password-form" onSubmit={handleSubmit(onsubmit)} >
                <p>Nhâp mật khẩu cũ *</p>
                <input type="text" ref={register} name="password-old" placeholder="Nhập mật khẩu cũ"  className="input-form-password"  />
                <p>Nhập mật khẩu mới *</p>
                <input name="password-new" type="text" ref={register}  placeholder="Nhập mật khẩu mới" className="input-form-password"/>
                <p></p>
                <input name="password-new-confirm" type="text" ref={register} placeholder="Nhập lại mật khẩu" className="input-form-password"/>
                <p></p>
                <input type="submit" value="Lưu" className="sb-form-password"/>
            </form>
        </div>
        </>
    )
}
export default PassWord;