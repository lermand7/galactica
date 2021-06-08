import React from "react";
import {Link} from 'react-scroll'
import "./About.css";
import earth from "../images/earth.jpg";

function About()
{
    return (
        <>
            <div className="about-div-wrapper">
                <img src={earth} alt="Föld"></img>
                <div className="about-div">
                    <h1>A nevem Lejer Armand</h1>
                    <p className="p-1">Programtervező informatikusnak tanulok.</p>
                    <p className="p-2">Érdekel minden, ami programozás.</p>
                    <p className="p-3">Célom a tudásom kiterjesztése különböző technológiákra és azokon keresztül a hobbijaim hasznosítása.</p>
                    <Link to="projekt" spy={true} smooth={true} offset={-80} duration={700} className="nav-link">
                            <i className="fa fa-angle-double-down"></i>
                    </Link>
                </div>
            </div>
      </>
    );
}

export default About;