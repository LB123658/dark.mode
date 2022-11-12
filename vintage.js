var scanLineCount = 0;
var scanlineDiv;
var number = window.innerHeight/2;
var scanLine;

function loadScanLines() {
document.body.style.background = "black";

var scanLineDiv = document.createElement("div");
scanLineDiv.id = "vintageFilter";
document.body.appendChild(scanLineDiv);
var css = document.createElement("style");
css.innerHTML = "#vintageFilter {position:fixed;top:0px;left:0px;height:100%;width:100%;background:transparent;} #vintageFilter div {height: 1px; width: 100%; margin-top: 1px; background: #282828; margin-bottom:1px;}";
document.head.appendChild(css);
}
var scanLineInterval = setInterval(function() {
scanLineCount++;
var scanLine = document.createElement("div");
document.getElementById("vintageFilter").appendChild(scanLine);
console.log(scanLineCount);
if (scanLineCount > number) {
  endScanLines();
  console.log("ended");
}
},0);

function endScanLines() {
clearInterval(scanLineInterval);
}
loadScanLines();
