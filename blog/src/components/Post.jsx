import React from 'react'
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import axios from 'axios';
export default function Post({ post }) {

    const PF = "http://localhost:5000/images/";
    return (
        <div className="Post col-md-5">
            {post.photo && (
                <img className="Post__image" src={PF + post.photo} alt="" />
            )}
            <div className="Post__info">
                <div className="Post__info--categories">
                    {post.categories.map((c) => (
                        <span className="Post__info--categories__postcat">{c.name} </span>
                    ))}
                </div>


                <Link to={`/post/${post._id}`} className="Post__info--postTitle" >
                    <div className="Post__info--categories">
                        {post.categories}
                    </div>

                    <span className="Post__info--postTitle">
                        {post.title}
                    </span>
                </Link>
                <hr />
                <span className="Post__info--postDate">
                    {new Date(post.createdAt).toDateString()}
                </span>
            </div>
            <p className="Post__description">
                {post.desc}
            </p>
        </div>
    )
}
