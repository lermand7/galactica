import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import {Link} from 'react-scroll'
import "./NavBar.css";

function NavBar()
{
    const [click, setClick] = useState(false);
    const [atBottom, setActive] = useState(false);

    function handleClick()
    {
        setClick(!click);
    }

    window.onscroll = function() {
        var d = document.documentElement;
        var offset = d.scrollTop + window.innerHeight;
        var height = d.offsetHeight;
      
        if (offset >= height) {
          setActive(true);
        }
        else{
            setActive(false);
        }
      };

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
                            <Link to="home" spy={true} smooth={true} offset={-80} duration={700} className="nav-link" onClick={handleClick}>
                                Haza
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="about-link" spy={true} smooth={true} offset={-80} duration={700} className="nav-link" onClick={handleClick}>
                                Rólam
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="projekt" spy={true} smooth={true} offset={-80} duration={700} activeClass={atBottom ? "inactive" : ""} className={atBottom ? "nav-link" : "nav-link"} onClick={handleClick}>
                                Projektek
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="more" spy={true} smooth={true} offset={-400} duration={700} className={atBottom ? "nav-link active" : "nav-link"} onClick={handleClick}>
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