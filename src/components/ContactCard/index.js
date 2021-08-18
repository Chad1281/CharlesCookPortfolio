import React from "react";
import "../../assets/css/style.css"

export default function ContactCard() {
    return (
        <div id="contact" class="card magenta-theme">
            <div class="card-title">Contact Me</div>
            <div class="card-desc">
                <p>Chad Cook</p> 
                <p><a href="tel:512-644-3039" title="Cell Phone Number">512-644-3039</a></p> 
                <address><a href="mailto:charles.cook28@gmail.com" title="Email Address">charles.cook28@gmail.com</a></address>
            </div>
        </div>
    )
}