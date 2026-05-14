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
    body.style.background = "rgb(117, 14, 0)";
    heading.style.color = "rgb(255, 142, 67)";
    description.style.color = "white";
    description.textContent = "It's autumn!🍂";
    toggleBtn.textContent = "Change Season";
    toggleBtn.style.background = "rgb(255, 163, 70)";
    image.src = "pumpkins-removebg-preview.png";
    }
    else {
    console.log("apply light styles)");
    body.style.background = "rgb(255, 184, 216)";
    heading.style.color = "rgb(255,39,133)";
    description.style.color = "rgb(255,39,134)";
    description.textContent = "It's spring!🌸";
    toggleBtn.textContent = "Change Season";
    toggleBtn.style.background = "antiquewhite";
    image.src = "light_pink_hisbiscus_flower-removebg-preview.png";
    }
}
// to attach function to the the actual button
toggleBtn.addEventListener("click",toggleMode);

// REVIEW
// 1. Select an element to target (button)
const TornadoBtn = document.querySelector("#Tornado");
// 2. Attach a function to the button
TornadoBtn.addEventListener("click",setTornado);
// 3. Define what happens when triggerred
function setTornado(){
    body.style.background = "black";
    description.style.color = "rgb(106, 255, 0)";
    body.style.fontFamily = "monospace";
    description.textContent = "IT'S A TORNADO!"
    image.src = "tornado-removebg-preview.png";
    toggleBtn.style.background = "grey";

}

const seasonBtn = document.querySelector("#Season");
// 2. Attach a function to the button
seasonBtn.addEventListener("click",setSeason);
// 3. Define what happens when triggerred
function setSeason(){
    body.style.background = "black";
    description.style.color = "rgb(106, 255, 0)";
    body.style.fontFamily = "monospace";
    description.textContent = "It's summer!)"

}

