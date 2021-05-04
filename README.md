# [DarkMode](https://lb123658.github.io/dark.mode/)
Switch any website to dark mode.
Simply paste the folowing code into the JavaScript console of any website to switch it to dark mode.\
_**Reloading the site you use this on will turn off dark mode**_
```
var script = document.createElement("SCRIPT");
script.src = "https://lb123658.github.io/dark.mode/text.js";
document.body.appendChild(script);
```
#### How to access JavaScript console:
On Mac ```option + command + c```\
Other computers ```right click and "Inspect". Then at the top click on "Console"```\\
#### DarkMode built into websites
You can build DarkMode into your website so it can have a dark mode without creating one yourself. Use the JavaScript code below in your website but make sure that there are buttons doing functions ```on()``` to turn on dark mode, and ```off()``` to turn it off.
```
<script>
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
</script>
```
