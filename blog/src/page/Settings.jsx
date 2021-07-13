import React, { useContext, useState } from 'react'
import Sidebar from '../components/Sidebar'
import {BiUserCircle} from 'react-icons/bi';
import { Context } from '../context/Context';
import axios from 'axios';

export default function Settings() {
    const[file,setFile] = useState(null);
    const[username,setUsername] = useState("");
    const[email,setEmail] = useState("");
    const[password,setPassword] = useState("");
    const[success,setSuccess] = useState(false);


    const {user,dispatch} = useContext(Context);
    const PF = "http://localhost:5000/images/"

    const handleSubmit = async (e) =>{
        e.preventDefault();
        dispatch({type:"UPDATE_START"});
        const updatedUser = {
            userId:user._id,
            username,
            email,
            password,
        };
        if(file){
            const data = new FormData();
            const filename=Date.now()+file.name;
            data.append("name",filename);
            data.append("file",file);
            updatedUser.profilePic = filename;
            try{
                await axios.post("/upload",data);
            }catch(err){}
        }
        try{
         const res =  await axios.put("/users/"+user._id,updatedUser);
          setSuccess(true);
          dispatch({type:"UPDATE_SUCCESS",payload:res.data });
        }catch(err){
            dispatch({type:"UPDATE_FAILURE"});
        }
    };
    return (
        <div className="settings">
           <div className="settings__wrapper">
                <div className="settings__wrapper--title">
                    <span className="settings__wrapper--title__update">Hesabını Güncelle</span>
                    <span className="settings__wrapper--title__delete">Hesabını Sil</span>
                </div>
                <form className="settings__wrapper--form" onSubmit={handleSubmit}>
                    <label>Profil Resmi</label>
                    <div className="settings__wrapper--form__profilepicture">
                        <img classNme="" 
                        src={file ? URL.createObjectURL(file) : PF + user.profilePic} 
                        alt="userProfile"/>
                        <label htmlFor="fileInput">
                            <BiUserCircle className="settings__wrapper--form__profilepicture__icon"/>
                        </label>
                        <input type="file" 
                        id="fileInput" 
                        style={{display:"none"}}
                        onChange={(e)=>setFile(e.target.files[0])}
                        />
                           
                      
                    </div>
                    <label>Kullanıcı Adı</label>
                     <input type="text" placeholder={user.username} onChange={e=>setUsername(e.target.value)} />
                     <label>Email</label>
                     <input type="text" placeholder={user.email} onChange={e=>setEmail(e.target.value)}/>
                     <label>Şifre</label>
                     <input type="password"onChange={e=>setPassword(e.target.value)} />
                     <button type="submit" class="btn btn-info settings__wrapper--form__btn">Güncelle</button>
                     {success && (
                     <span style={{color:"green",fontSize:"18px",marginTop:"20px",textAlign:"center"}}>Hesap bilgileriniz başarıyla güncellendi.</span>
                     )}
                </form>
           </div>
           <Sidebar/>
        </div>
    )
}
