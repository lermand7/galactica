import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import {Link} from 'react-scroll'
import "./NavBar.css";

function NavBar()
{
    const [click, setClick] = useState(false);

    function handleClick(isLink)
    {
        setClick(!click);
    }

    return (
        <>
            <nav className="navbar">
                <div className="nav-container">
                    <NavLink exact to="/" className="nav-logo">
                        GALACTICA
                    </NavLink>
                    <div className="nav-spacer"></div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link activeClass="active" to="home" spy={true} smooth={true} offset={-80} duration={700} className="nav-link" onClick={handleClick}>
                                Haza
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="about" spy={true} smooth={true} offset={-80} duration={700} className="nav-link" onClick={handleClick}>
                                Rólam
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="projekt" spy={true} smooth={true} offset={-80} duration={700} className="nav-link" onClick={handleClick}>
                                Projektek
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="contact" spy={true} smooth={true} offset={-80} duration={700} className="nav-link" onClick={handleClick}>
                                Kapcsolat
                            </Link>
                        </li>
                    </ul>
                    <div className="nav-icon" onClick={handleClick}>
                        <i className={click ? "fa fa-times":"fa fa-bars"}></i>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;