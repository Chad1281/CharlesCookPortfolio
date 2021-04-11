import React from "react";
import "../../assets/css/style.css";
import GitHubLogo from "../../assets/images/GitHub.png";
import LinkedInLogo from "../../assets/images/LinkedIn.png";
import FacebookLogo from "../../assets/images/facebook.png";
import ContactCard from "../../assets/images/contact_card.png";
import HeadShot from "../../assets/images/head.png";

export default function Links() {
    return (
        <div className="links">
            <h3>Links</h3>
            <a href="https://github.com/Chad1281" target="_blank">
                <img className="imgLinks" title="GitHub Logo" src={GitHubLogo} alt="GitHub logo" />
            </a>
            <a href="https://www.linkedin.com/in/chad-cook-80413095/" target="_blank">
                <img className="imgLinks" title="Linkedin Logo" src={LinkedInLogo} alt="LinkedIn Logo" />
            </a>
            <a href="https://www.facebook.com/chad.cook.3760" target="_blank">
                <img className="imgLinks" title="Facebook Logo" src={FacebookLogo} alt="facebook logo" />
            </a>  
            <a href="./assets/Chad Cook Card.vcf" target="_blank">
                <img className="imgLinks" title="Contact Card" src={ContactCard} alt="Contact Card" /> 
            </a>  
            <img id="headshot" src={HeadShot} alt="headshot of Chad Cook" />
        </div>
    )
}

