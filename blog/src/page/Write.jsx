import React, { useContext,useState } from 'react'
import {AiOutlinePlusSquare} from 'react-icons/ai';
import axios from 'axios';
import {Context} from '../context/Context';

export default function Write() {
    const[title,setTitle] = useState("");
    const[desc,setDesc] = useState("");
    const[file,setFile] = useState("null");
    const {user}= useContext(Context);
  

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const newPost = {
            username:user.username,
            title,
            desc
        };
        if(file){
            const data = new FormData();
            const filename=Date.now() + file.name;
            data.append("name",filename);
            data.append("file",file);
            newPost.photo = filename;
            try{
                await axios.post("/upload",data);
            }catch(err){}
        }
        try{
          const res = await axios.post("/posts",newPost);
          window.location.replace("/post/" + res.data._id);
        }catch(err){}
    };
    return (
        <div className="write">
           


            <form className="write__Form" onSubmit={handleSubmit}>
                <div className="write__Form--formgroup">
                    <label htmlFor="fileInput">
                    <AiOutlinePlusSquare className="write__Form--formgroup__icon"/>
                    </label>
                   <input type="file" id="fileInput" 
                   style={{display:"none"}} 
                   onChange={(e)=>setFile(e.target.files[0])}
                   /> 
                   <input type="text" placeholder="Başlık" className="write__Form--formgroup__input" autoFocus={true}
                   onChange={e=>setTitle(e.target.value)}
                   /> 
                </div>
                <div className="write__Form--formgroup">
                    <textarea placeholder="Hikayeni anlat.." type="text" className="write__Form--formgroup__wtext "   onChange={e=>setDesc(e.target.value)} ></textarea>
                </div>
                <button className="write__Form--btn btn btn-outline-success" type="submit">Yayınla</button>
            </form>
        </div>
    )
}
