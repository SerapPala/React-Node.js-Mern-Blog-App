import React, { useEffect, useState } from 'react'
import { TiArrowMaximiseOutline, TiSocialTwitter } from 'react-icons/ti';
import { TiSocialLinkedin } from 'react-icons/ti';
import { TiSocialInstagram } from 'react-icons/ti';
import axios from 'axios';
import { Link } from "react-router-dom";

export default function Sidebar() {
    const [cats, setCats] = useState([]);

    useEffect(() => {
        const getCats = async () => {
            const res = await axios.get("/categories")
            setCats(res.data)
        }
        getCats();
    }, [])
    return (
        
        <div className="Sidebar">

            <div className="Sidebar__item">
                <span className="Sidebar__item--title">
                    HAKKIMDA
                </span>
                <img src="https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="" alt="aboutme" />
                <p>
                    The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                </p>
            </div>
            
            <div className="Sidebar__item">
                <span className="Sidebar__item--title">
                  KATEGORİLER
                </span>
                <ul className="Sidebar__item--list">
                {cats.map((c)=>(
                    <Link to={`/?cat=${c.name}`} className="Sidebar__item--list__listItem">
                    <li className="Sidebar__item--list__listItem--link">{c.name}</li>
                    </Link>
                ))}
                    
                </ul>
            </div>

            <div className="Sidebar__item">
                <span className="Sidebar__item--title">
                    TAKİP
                </span>
                <div className="Sidebar__item--social">
                    <TiSocialTwitter className="Sidebar__item--social__icon" />
                    <TiSocialLinkedin className="Sidebar__item--social__icon" />
                    <TiSocialInstagram className="Sidebar__item--social__icon" />
                </div>
            </div>

        </div>

        
    )
}



