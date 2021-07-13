import React from 'react'
import  { useContext } from 'react'; 
import {Link} from 'react-router-dom';
import {Context} from "../context/Context";
import axios from 'axios';
import { useRef } from 'react';

export default function Login() {
  
    const userRef = useRef()
    const passwordRef = useRef()
    const {  dispatch, isFetching } = useContext(Context)

    const handleSubmit = async (e)=>{
        e.preventDefault();
        dispatch({ type:"LOGIN_START"} );
        try{
                const res = await axios.post("/auth/login", {
                    username: userRef.current.value,
                    password: passwordRef.current.value,
                })
                dispatch({ type:"LOGIN_SUCCESS",payload: res.data });
        }catch(err){
            dispatch({ type:"LOGIN_FAILURE" });
        }
    };
    return (
        <div className="login">
            <span className="login__title">Giriş Yap</span>
            <form className="login__form" onSubmit={handleSubmit}>
                <label>Kullanıcı Adı</label>
                <input type="text" 
                placeholder="Kullanıcı adınızı bu alana yazabilirsiniz."
                ref={userRef}
                />
                <label>Şifre</label>
                <input type="password" 
                placeholder="Şifrenizi bu alana girebilirsiniz."
                ref={passwordRef}
                />
                <button class="btn login__form--loginbtn" type="submit" disabled={isFetching}>Giriş Yap</button>
            </form>
            <button type="button" class="btn btn-outline-primary login__form--registerbtn"><Link  className="login__form--registerbtn__link" to="/register">Kaydol</Link></button>
   
        </div>
    )
}
