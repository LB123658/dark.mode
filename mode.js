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
// change buttons to grey so it looks better
var x = document.getElementsByTagName("BUTTON");
var i;
for (i = 0; i < x.length; i++) {
  x[i].style.color = "grey";
  x[i].style.background = "#282828";
  x[i].style.border = "1px solid grey";
}
// change divs to grey so it looks better
var x = document.getElementsByTagName("DIV");
var i;
for (i = 0; i < x.length; i++) {
  x[i].style.background = "#282828";
}
// change textarea to black so they look better
var x = document.getElementsByTagName("TEXTAREA");
var i;
for (i = 0; i < x.length; i++) {
  x[i].style.color = "lightgrey";
  x[i].style.background = "black";
}
//changes background with js in case <body> is already a different color
var script = document.createElement("SCRIPT");
script.src = "https://lb123658.github.io/dark.mode/text.js";
document.body.appendChild(script);

// change mode using css styles
var s = document.createElement("LINK");
s.rel = "stylesheet";
s.type = "text/css";
s.href = "https://lb123658.github.io/dark.mode/normal.css";
document.head.appendChild(s);
