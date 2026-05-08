// Create a boolean varibale to track the mode
let darkMode = false;

/* NEW JS FUNCTION: document.querySelector()
lets you select an HTML element and store the refrence in a varibale for JS to use
*/

const body = document.querySelector("body");
const heading = document.querySelector("#main-heading");
const description = document.querySelector("#description");
const toggleBtn = document.querySelector("#toggle");
const image = document.querySelector("#image");
// CONST is like LET, but the value won't chnage

// JS can now change attributes and properties!
heading.textContent = "Light & Dark Website"; 
/* JS wrote HTML code!*/
heading.style.color = "Hotpink"; //JS wrote CSS code

// Define what happens button is clicked
function toggleMode(){
    console.log("triggered function");
    // 1. Flip The boolean to reflect the mode
    darkMode = !darkMode
    console.log(darkMode);
    //2. conditionally apply styles based on mode
    if (darkMode == true) {
    console.log("apply dark styles");
    body.style.background = "rgb(255, 39, 133)";
    heading.style.color = "rgb(255, 184, 216)";
    description.style.color = "white";
    description.textContent = "Welcome to the dark side🩷";
    toggleBtn.textContent = "Switch to light";
    toggleBtn.style.background = "rgb(255, 184, 222)";
    image.src = "hot_pink_hibiscus-removebg-preview.png";
    }
    else {
    console.log("apply light styles)");
    body.style.background = "rgb(255, 184, 216)";
    heading.style.color = "rgb(255,39,133)";
    description.style.color = "rgb(255,39,134)";
    description.textContent = "Welcome to heaven👼🏾";
    toggleBtn.textContent = "Switch to dark";
    toggleBtn.style.background = "antiquewhite";
    image.src = "light_pink_hisbiscus_flower-removebg-preview.png";
    }
}
// to attach function to the the actual button
toggleBtn.addEventListener("click",toggleMode);