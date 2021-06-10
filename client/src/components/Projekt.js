import React from "react";
import "./Projekt.css";
import img1 from "../images/1.jpg";
import img2 from "../images/2.jpg";
import img3 from "../images/3.jpg";
import img4 from "../images/4.jpg";
import car from "../video/car.mp4";
import galaxy from "../video/galaxy_3.mp4";

function Projekt()
{
    return (
        <>
            <div className="projekt-div-wrapper">
            <h1>Renderek</h1>
                <table>
                    <thead>
                    <tr>
                        <th>
                            <div dangerouslySetInnerHTML={{ __html: `
                                <video autoplay loop muted class="car-video">
                                    <source src="${car}" type="video/mp4" />
                                </video></th>
                                ` }}
                            />
                        </th>
                        <th><img src={img2} alt="Mars"></img></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><img src={img3} alt="Föld"></img></td>  
                        <td ><img src={img1} alt="Hellcat"></img></td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                        <div dangerouslySetInnerHTML={{ __html: `
                                <video autoplay loop muted class="car-video">
                                    <source src="${galaxy}" type="video/mp4" />
                                </video></th>
                                ` }}
                            /></td>
                    </tr>
                    </tbody>
                </table>
                <h1>Folyamatban</h1>
                <div className="soon">
                    <img src={img4} alt="szint"></img>
                </div>
            </div>
      </>
    );
}

export default Projekt;