function on() {
var script = document.createElement("SCRIPT");
script.src = "https://lb123658.github.io/dark.mode/text.js";
script.id = "dark-mode-script";
document.body.appendChild(script);
}
function off() {
var darkMode = document.getElementById("dark-mode-script");
darkMode.remove();
}
