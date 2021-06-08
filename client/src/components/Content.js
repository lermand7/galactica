import React from "react";
import "./Content.css";
import particles from "../video/particles.mp4";

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
                    </div>
                </div>
            </div>
            <div className="projekt" style={{height: 500}}>
                <h1>Projektek</h1>                      
            </div>
            <div className="contact" style={{height: 500}}>
                <h1>This is Contact section</h1>
            </div>
      </>
    );
}


export default Content;