# [DarkMode](https://lb123658.github.io/dark.mode/)
Switch any website to dark mode.\
Simply paste the folowing code into the JavaScript console of any website to switch it to dark mode. Visit the website [here](https://lb123658.github.io/dark.mode/).\
_**Reloading the site you use this on will turn off dark mode**_
```
var script = document.createElement("SCRIPT");
script.src = "https://lb123658.github.io/dark.mode/text.js";
document.body.appendChild(script);
```
#### How to access JavaScript console:
On Mac ```option + command + c```\
Other computers ```right click and "Inspect". Then at the top click on "Console"```
#### DarkMode built into websites
You can build DarkMode into your website so it can have a dark mode without creating one yourself. Copy the script tag below. The code below will automaically generate two buttons to switch between light and dark mode. However, use CSS to put them where you want on the page.
```
// paste this into the HTML to add DarkMode
<script src="https://lb123658.github.io/dark.mode/buttons.js"></script>
```
#### New experiment version
Paste this code into the console for a slightly different dark mode with new features. This one combines JavaScript and CSS.
```
var script = document.createElement("SCRIPT");
script.src = "https://lb123658.github.io/dark.mode/mode.js";
document.body.appendChild(script);
```
