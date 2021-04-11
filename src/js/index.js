import $ from "jquery";
import "../assets/css/style.css";
import DownArrow from "../assets/images/down.png"

setTimeout(printText, 1000);

function printText() {
    const myName = ["H", "i", ",", " ", "m", "y", " ",  "n", "a", "m", "e", " ",  "i", "s", " ", "C", "h", "a", "d", "."];
    const myDesc = "I'm a full stack developer currently attending the Coding Boot Camp at UT Austin. I began coding as a hobby while I was still in high school in the 90's but started a different path after graduation. Over the years I've reintroduced myself to coding and have done a little bit of coding as a hobby here and there.I really enjoy problem solving and can spend all day trying to solve a problem or problems without losing any interest. Javascript gives me a chance to use logic to see what I can accomplish with code. Now 20 years after building a career in the beverage industry I've decided to make a career change and here we are."
    
    var i = 0;

    var id = setInterval(addText, 150); 

    function addText() {
            document.getElementById("aboutName").innerHTML += myName[i];
            i++
            if (i > myName.length - 1) {
                clearInterval(id);
                setTimeout(printDesc, 1000);
            }                        
        }

    function printDesc() {
        document.getElementById("aboutDesc").innerHTML += myDesc;
        setTimeout(appendDown, 500);
    }

    function appendDown() {        
        var downArrow = $("<a>").attr("href", "#projects");
        var downArrowImg = $("<img>").attr("src", DownArrow);        

        $("#down").append(downArrow);
        $(downArrow).append(downArrowImg);
    }
}
