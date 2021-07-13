import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useLocation } from "react-router";
import { FaEdit } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { MdDeleteForever } from 'react-icons/md';
import { Context } from '../context/Context';

export default function SinglePost() {
    const location = useLocation()
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const PF = "http://localhost:5000/images/";
    const { user } = useContext(Context);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path);
            setPost(res.data);
            setTitle(res.data.title);
            setDesc(res.data.desc);
        };
        getPost()
    }, [path]);

    const handleDelete = async () => {
        try {
            await axios.delete(`/posts/${post._id}`, {
                data: { username: user.username },
            });
            window.location.replace("/");
        } catch (err) { }
    };


    const handleUpdate = async () => {
        try {
            await axios.put(`/posts/${post._id}`, {
                username: user.username,
                title,
                desc,
            });
            setUpdateMode(false)
        } catch (err) { }
    };

    return (
        <div className="singlepost">
            <div className="singlepost__wrapper">
                {post.photo && (
                    <img src={PF + post.photo} alt="singlepost" className="singlepost__wrapper--img" />
                )}{
                    updateMode ? (
                        <input type="text"
                            className="singlepost__wrapper--titleInput"
                            value={title}
                            autoFocus
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    ) : (

                        <h1 className="singlepost__wrapper--title">
                            {title}
                            {post.username === user?.username && (
                                <div className="singlepost__wrapper--edit">
                                    <FaEdit className="singlepost__wrapper--edit__icon-edit" onClick={() => setUpdateMode(true)} />
                                    <MdDeleteForever className="singlepost__wrapper--edit__icon-delete" onClick={handleDelete} />
                                </div>
                            )}
                        </h1>
                    )}
                <div className="singlepost__wrapper--info">
                    <span className="singlepost__wrapper--info__author">Kullanıcı:
                        <Link to={`/?user=${post.username}`} className="singlepost__wrapper--info__author--link">
                            <b>{post.username}</b>
                        </Link>
                    </span>
                    <span className="singlepost__wrapper--info__date">{new Date(post.createdAt).toDateString()}
                    </span>
                </div>
                {updateMode ? (
                    <textarea className="singlepost__wrapper__descInput" value={desc}
                        onChange={(e) => setDesc(e.target.value)}
                    />
                ) : (
                    <p className="singlepost__wrapper__desc">{desc}</p>
                )}
                {updateMode && (
                    <button className="singlepost__wrapper__descBtn btn" type="submit"
                        onClick={handleUpdate}
                    >Güncelle</button>
                )}
            </div>

        </div>
    )
}
