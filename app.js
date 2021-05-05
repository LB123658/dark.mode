//THIS ONE DOES NOT WORK YET
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
div.style.height = "80px";
div.style.background = "lightgrey";
div.style.zIndex = "10";
div.style.visibility = "visible";
document.body.appendChild(div);

var txt = document.createElement("P");
txt.style.position = "absolute";
txt.style.marginLeft = "15%";
txt.style.fontFamily = "arial";
txt.style.zIndex = "11";
txt.style.top = "10px";
txt.style.color = "grey";
txt.style.fontSize = "16px";
txt.style.userSelect = "none";
txt.style.visibility = "visible";
txt.innerHTML = "Reloading or leaving this page will turn off dark mode.";
document.body.appendChild(txt);

var css = document.createElement("LINK");
css.rel = "stylesheet";
css.type = "text/css";
css.href = "https://lb123658.github.io/Boost-HTML-Editor/library.css";
document.head.appendChild(css);

var b = document.createElement("BUTTON");
b.className = "blue-social";
b.style.position = "absolute";
b.style.right = "15%";
b.style.zIndex = "11";
b.style.top = "50px";
b.style.visibility = "hidden";
b.innerHTML = "DarkMode js";
b.title = "DarkMode js";
document.body.appendChild(b);
