import $ from "jquery";
import "../assets/css/style.css";
import DownArrow from "../assets/images/down.png"

setTimeout(printText, 1000);

function printText() {
    const myName = ["H", "i", ",", " ", "m", "y", " ",  "n", "a", "m", "e", " ",  "i", "s", " ", "C", "h", "a", "d", "."];
    const myDesc = "I'm a Full Stack React Developer and recent graduate of the Coding Boot Camp at UT Austin. After nearly 20 years of building a career in the soda industry, I’ve reinvested in myself and chose a new career path in web development. My coding language is JavaScript with React on the front end and Node Express on the back end. I’m able to write CRUD operations in both SQL and NoSQL databases such as MySQL, MongoDB, and Google Firestore. I’m currently seeking freelance work to build websites for small businesses that need more functionality than what they get from drag and drop website builders, want a responsive web page that looks great on all devices, and is Search Engine Optimized to come at the top of Google search results."
    
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
