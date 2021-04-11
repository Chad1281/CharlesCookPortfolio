import React from "react";
import "../../assets/css/style.css"
import Resume from "../../assets/images/Resume.png"

export default function ResumeCard() {
    return (
        <div id="resume" class="card gray-theme">
            <div class="card-title">Resume</div>
            <a href="../../assets/Resume.pdf">
                <img id="resumeImg" src={Resume} alt="Resume" />
            </a>            
        </div>
    )
}