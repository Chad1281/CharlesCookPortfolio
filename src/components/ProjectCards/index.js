import React from "react";
import { Img } from "react-image";
import "../../assets/css/style.css";
import projectLinks from "../../assets/data/projectLinks";
import GitHub from "../../assets/images/GitHub.png";

console.log()
export default function ProjectCards() {
    return (        
        <div id="projects" className="cardContainer">
            <div class="spacer"></div>
            <h1>Projects</h1>
            <div id="projectCards">
                {projectLinks.map(function(link) {
                    console.log(link.image);
                    return (
                        <a href={link.url} target="_blank">
                            <div className="card cyan-theme">                            
                                <Img src={link.image} />
                                <a className="card-gh" href={link.github} target="_blank">
                                    <img className="card-gh-img" src={GitHub} alt="GitHub Logo" />
                                </a>
                                <div className="card-title">{link.title}</div>
                                <div className="card-desc">{link.description}</div>
                            </div>    
                        </a>  
                    )                    
                })}
            </div>
        </div>
    )    
}
