import React, {  useState } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

export default function Register() {
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try{
            const res = await axios.post("/auth/register",{
                username,
                email,
                password,
            });
            res.data && window.location.replace("/login");
        }catch(err){
            setError(true);
        }
     
    };
    return (
        <div className="register">
            <span className="register__title">Kaydol</span>
            <form className="register__form" onSubmit={handleSubmit}>
              
                <label>Kullaıcı Adı</label>
                <input type="text" placeholder="Kullanıcı Adınız.."
                  onChange={e=>setUsername(e.target.value)}
                />
              
                <label>Email</label>
                <input type="text" placeholder="Email Adresiniz.."
                  onChange={e=>setEmail(e.target.value)}
                />

                <label>Şifre</label>
                <input type="password" className="" placeholder="Şifreniz.."
                  onChange={e=>setPassword(e.target.value)}
                />

                <button class="btn  register__form--registerbtn" type="submit">Kaydol</button>
            </form>
            <button type="button" class="btn register__form--loginbtn"> 
            <Link className="register__form--registerbtn__linkk" to="/login">
            Giriş Yap
            </Link>
            </button>
         {error &&  <span style={{fontSize:19,paddingTop:9,color:"#b95258"}}>Bir şeyler yanlış gitti..</span>}
        </div>
    )
}
