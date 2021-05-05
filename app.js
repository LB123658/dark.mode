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
// create dark background
var mode = document.createElement("DIV");
mode.style.position = "fixed";
mode.style.top = "0px";
mode.style.left = "0px";
mode.style.width = "100%";
mode.style.height = "100%";
mode.style.background = "#282828";
mode.style.zIndex = "-1";
document.body.appendChild(mode);

//create buttons about DarkMode js
var div = document.createElement("DIV");
div.style.position = "absolute";
div.style.left = "5%";
div.style.top = "0px";
div.style.width = "90%";
div.style.height = "150px";
div.style.background = "lightgrey";
div.style.zIndex = "10";
document.body.appendChild(div);

var txt = document.createElement("P");
txt.style.position = "absolute";
txt.style.marginLeft = "5%";
txt.style.fontFamily = "arial";
txt.style.color = "grey";
txt.style.fontSize = "16px";
txt.style.userSelect = "none";
txt.innerHTML = "Reloading or leaving this page will turn off dark mode.";
document.body.appendChild(txt);

var b = document.createElement("BUTTON");
b.class = "blue-social";
b.style.position = "absolute";
b.style.right = "5%";
b.style.zIndex = "11";
b.style.top = "50px";
b.innerHTML = "DarkMode";
b.title = "Learn mode about DarkMode js";
b.addEventListener("click", openLink() {window.open("https://lb123658.github.io/dark.mode/", "_blank").focus();});
document.body.appendChild(b);

var css = document.createElement("LINK");
css.rel = "stylesheet";
css.type = "text/css";
css.href = "https://lb123658.github.io/Boost-HTML-Editor/library.css";
document.body.appendChild(css);
