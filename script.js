// Create a boolean varibale to track the mode
let darkMode = false;

/* NEW JS FUNCTION: document.querySelector()
lets you select an HTML element and store the refrence in a varibale for JS to use
*/

const body = document.querySelector("body");
const heading = document.querySelector("#main-heading");
const description = document.querySelector("#description");
const toggleBtn = document.querySelector("#toggle");
// CONST is like LET, but the value won't chnage

// JS can now change attributes and properties!
heading.textContent = "Light & Dark Website"; 
/* JS wrote HTML code!*/
heading.style.color = "Hotpink"; //JS wrote CSS code
