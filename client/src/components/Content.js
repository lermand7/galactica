import React from "react";
import {Link} from 'react-scroll'
import "./Content.css";
import About from "./About.js";
import Projekt from "./Projekt.js";
import Contact from "./Contact.js";
import particles from "../video/particles.mp4";

function Content()
{
    return (
        <>
            <div id="home" className="video-div"> <div dangerouslySetInnerHTML={{ __html: `
                <video playsInline preload autoPlay={true} loop muted class="home-video">
                    <source src="${particles}" type="video/mp4" />
                </video>
                ` }}
                />
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
            <div className="contact">
                <Contact />
            </div>
      </>
    );
}


export default Content;