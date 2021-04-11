import React from "react";
import $ from "jquery";
import { Img } from "react-image";
import "../../assets/css/style.css";
import projectLinks from "../../assets/data/projectLinks";
import Monnaie from "../../assets/images/monnaie.png";
import Served from "../../assets/images/served.png";
import Employee from "../../assets/images/employee.png";
import Burger from "../../assets/images/burger.png";
import StarWars from "../../assets/images/star-wars.png";
import Budget from "../../assets/images/budget.png";
import GitHub from "../../assets/images/GitHub.png";

const ProjectLinks = JSON.stringify(projectLinks);

console.log(ProjectLinks)
export default function ProjectCards() {
    return (        
        <div id="projects" className="cardContainer">
            <div class="spacer"></div>
            <h1>Projects</h1>
            <div id="projectCards">
                {projectLinks.map(function(link) {
                    console.log(link.image);
                    return (
                        <a href={link.url}>
                            <div className="card cyan-theme">                            
                                <Img src={link.image} />
                                <a href={link.github}>
                                    <img src={GitHub} />
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

// export function CardsWrapper({custId, props}) {
//     return (
        
//     )
// }

// export function Card({custClass, props}) {
//     console.log(projectLinks);
//     return (
        
//     )
// }

// export function CardImg() {
//     return (
//         <>
//         {projectLinks.map(function(link) {
//             return(
//                <img src={link.image} /> 
//             )            
//         })}
//         </>
        
//     )
// }

// export function CardUrl(props) {
//     return (
//         <>
//         {projectLinks.map(function(link) {
//             return (
//                <a href={link.url}>{props.children}</a> 
//             )
//         })}
//         </>        
//     )
// }

// export function CardTitle() {
//     return (
//         <>
//         {projectLinks.map(function(link) {
//             return (
//                 <div class="card-title">{link.title}</div>
//             )
//         })}
//         </>
//     )    
// }

// export function CardDesc() {
//     return (
//         <>
//         {projectLinks.map(function(link) {
//             return (
//                 <div class="card-desc">{link.description}</div>
//             )
//         })}
//         </>        
//     )
// }





