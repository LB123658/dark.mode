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
