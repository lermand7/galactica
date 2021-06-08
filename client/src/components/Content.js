import React from "react";
import {Link} from 'react-scroll'
import "./Content.css";
import About from "./About.js";
import Projekt from "./Projekt.js";
import particles from "../video/particles_1.mp4";

function Content()
{
    return (
        <>
            <div id="home" className="video-div">
                <video autoPlay loop muted className="home-video">
                    <source src={particles} type="video/mp4" />
                </video>
                <div className="home-div">
                    <div className="home-div-center">
                        <h1>ÜDVÖZÖLLEK, UTAZÓ!</h1>
                        <Link to="about-link" spy={true} smooth={true} offset={-80} duration={700} className="nav-link">
                            <i className="fa fa-angle-double-down"></i>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="about-wrapper">
                <About />
            </div>
            <div className="projekt">
                <Projekt />
            </div> 
            <div className="contact" style={{height: 500}}>
                <h1>This is Contact section</h1>
            </div>
      </>
    );
}


export default Content;