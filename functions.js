function on() {
window.location.search = "?mode=dark";
}
function off() {
window.location.search = "?mode=light";
}
if (window.location.search == "?mode=dark") {
var script = document.createElement("SCRIPT");
script.src = "https://lb123658.github.io/dark.mode/text.js";
document.body.appendChild(script);
} else {
  ;
}
