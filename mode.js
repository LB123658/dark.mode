// THIS IS THE NEXT VERSION OF the text.js file
// change text to grey so it is readable
var x = document.getElementsByTagName("P");
var i;
for (i = 0; i < x.length; i++) {
  x[i].style.color = "grey";
}
// change links to grey so it is readable
var x = document.getElementsByTagName("A");
var i;
for (i = 0; i < x.length; i++) {
  x[i].style.color = "grey";
}
// change inputs to grey so it looks better
var x = document.getElementsByTagName("INPUT");
var i;
for (i = 0; i < x.length; i++) {
  x[i].style.color = "grey";
  x[i].style.background = "#282828";
}

var script = document.createElement("SCRIPT");
script.src = "https://lb123658.github.io/dark.mode/text.js";
document.body.appendChild(script);

// change mode using css styles
var s = document.createElement("LINK");
s.rel = "stylesheet";
s.type = "text/css";
s.href = "https://lb123658.github.io/dark.mode/library.css";
document.head.appendChild(s);
