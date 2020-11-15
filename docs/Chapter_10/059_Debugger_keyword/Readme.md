# DEBUGGER KEYWORD

`Debugger` is a keyword in JavaScript that is used to sop execution of the programm and start debugging mode.

example found in **[Examples/c10/breakpoints.html](../Examples/c10/breakpoints.html)**

**JavaScript**

```js
var $form, width, height, area;
$form = $("#calculator");

$("#calculator").on("submit", function(e) {
  e.preventDefault();
  console.log("Clicked submit...");

  width = $("#width").val();
  height = $("#height").val();
  area = width * height;

  if (area < 100) {
    debugger; // A breakpoint is set if the developer tools are open
  }

  $form.append("<p>" + area + "</p>");
});
```

External example:

**JavaScript**

```js
let xhr = new XMLHttpRequest(),
  response;

console.log("Debugger mode will activate soon!");
xhr.open("GET", "https://api.thecatapi.com/v1/images/search", true);
xhr.onload = function() {
  if (xhr.status === 200) {
    response = xhr.response;
    console.log("Debugger mode activated!");
    debugger;
    console.log("Debugger mode ended!");
  }
};
xhr.send();
```
