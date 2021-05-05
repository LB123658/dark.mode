//creates google icons css
var l = document.createElement("LINK");
l.rel = "stylesheet";
l.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
document.head.appendChild(l);

//creates other script tag
var javascript = document.createElement("SCRIPT");
javascript.src = "https://lb123658.github.io/dark.mode/functions.js";
document.body.appendChild(l);

// creates button to turn on light mode
var light = document.createElement("SPAN");
light.className = "material-icons";
light.id = "light-mode-button";
light.style.background = "transparent";
light.style.border = "none";
light.style.color = "grey";
light.addEventListener("click", off());
document.body.appendChild(light);

// creates button to turn on dark mode
var dark = document.createElement("SPAN");
dark.className = "material-icons";
dark.id = "dark-mode-button";
dark.style.background = "transparent";
dark.style.border = "none";
dark.style.color = "grey";
dark.addEventListener("click", on());
document.body.appendChild(dark);

// to style these buttons the id for the one that turns on light mode is "light-mode-button" and the id for the one that turns dark mode on is "dark-mode-button"
