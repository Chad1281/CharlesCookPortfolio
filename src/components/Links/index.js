import React from "react";


export default function Links() {
    return (
        <div className="links">
            <h3>Links</h3>
            <a href="https://chad1281.github.io/chad_cook/.">
                <img className="imgLinks" title="GitHub Logo" src="../assets/images/GitHub.png" alt="GitHub logo" />
            </a>
            <a href="https://www.linkedin.com/in/chad-cook-80413095/">
                <img className="imgLinks" title="Linkedin Logo" src="../assets/images/Github.png" alt="LinkedIn Logo" />
            </a>
            <a href="https://www.facebook.com/chad.cook.3760">
                <img className="imgLinks" title="Facebook Logo" src="../assets/images/facebook.png" alt="facebook logo" />
            </a>  
            <a href="./assets/Chad Cook Card.vcf">
                <img className="imgLinks" title="Contact Card" src="../assets/images/contact_card.png" alt="Contact Card" /> 
            </a>  
            <img id="headshot" src="../assets/images/head.png" alt="headshot of Chad Cook" />
        </div>
    )
}

