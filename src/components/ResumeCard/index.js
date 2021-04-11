import React from "react";
import "../../assets/css/style.css"
import Resume from "../../assets/images/Resume.png"
import ResumePdf from "../../assets/Resume.pdf"

export default function ResumeCard() {
    return (
        <div id="resume" className="card gray-theme">
            <div className="card-title">Resume</div>
            <a href={ResumePdf}>
                <img id="resumeImg" src={Resume} alt="Resume" />
            </a>            
        </div>
    )
}