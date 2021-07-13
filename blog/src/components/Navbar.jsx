import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../context/Context';

import { TiSocialTwitter } from 'react-icons/ti';
import { TiSocialLinkedin } from 'react-icons/ti';
import { TiSocialInstagram } from 'react-icons/ti';
import { IoIosSearch } from "react-icons/io";



const Navbar = () => {
    const [state, setState] = React.useState(false);
    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, [])
    const handleScroll = () => {
        if (window.scrollY > 120) {
            setState(true);
        } else {
            setState(false);
        }
    }

    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/"
    
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };
    return (
        <div className={`navbar ${state ? 'whiteBg' : 'transparent'} `}>
            <div className="container">
                <div className="navbar__container">

                    <div className="navbar__left">
                        <TiSocialTwitter className="navbar__left--social" />
                        <TiSocialLinkedin className="navbar__left--social" />
                        <TiSocialInstagram className="navbar__left--social" />
                    </div>

                    <div className="navbar__center">
                        <ul className="navbar__center--items">
                            <li className="navbar__center--items__item">
                                <Link  style={{color:"#ECD662"}} className="navbar__center--items__item" to="/">ANASAYFA</Link>
                            </li>
                            <li className="navbar__center--items__item">
                                <Link className="navbar__center--items__item" to="/write">YAZ</Link>
                            </li>
                            <li className="navbar__right--items__item" onClick={handleLogout}>
                                {user && "ÇIKIŞ"}
                            </li>
                        </ul>
                    </div>

                    <div className="navbar__right">
                        {user ? (
                              <Link to="/settings">
                              <img src={PF + user.profilePic} alt="user-image" />
                              </Link>  
                        ) : (
                            <ul className="navbar__right--items">
                                <li className="navbar__right--items__item">
                                    <Link className="link" to="/login">GİRİŞ YAP</Link>
                                </li>
                                <li className="navbar__right--items__item">
                                    <Link className="link" to="/register">KAYDOL</Link>
                                </li>
                                <li className="navbar__right--items__item">
                                    <IoIosSearch className="search" />
                                </li>

                                <li className="navbar__right--items__item" onClick={handleLogout}>
                                    {user && "ÇIKIŞ"}
                                </li>
                            </ul>
                        )}

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Navbar