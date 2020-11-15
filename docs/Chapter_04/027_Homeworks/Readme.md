# Chapter 4 example

example found in <a target="_blank" href="Chapter_04/Examples/c04/example.html">**Chapter_04/Examples/c04/example.html**</a>

**JavaScript**

```js
var table = 3; // Unit of table
var operator = "addition"; // Type of calculation by default.
var i = 1; // Set counter to 1 or you can make it empty since it is assigned inside the drawOnHTML function
var msg = ""; // Message
var el = document.getElementById("blackboard"); // Make a cache for the HTML element that has id of "blackboard"

function calculate(iteration, operation, table) {
  let result = 0;
  switch (operation) {
    case "/":
      result = (iteration / table).toFixed(2);
      break;
    case "-":
      result = iteration - table;
      break;
    case "*":
      result = iteration * table;
      break;
    default:
      result = iteration + table;
      break;
  }
  return result;
}

function render(op) {
  switch (op) {
    case "subtraction":
      operator = "-";
      break;
    case "multiplication":
      operator = "*";
      break;
    case "division":
      operator = "/";
      break;
    default:
      operator = "+";
  }
  drawOnHTML();
}

function drawOnHTML() {
  i = 1;
  msg = "";

  while (i < 11) {
    msg +=
      i +
      " " +
      operator +
      " " +
      table +
      " = " +
      calculate(i, operator, table) +
      "<br />";
    i++;
  }

  el.innerHTML = msg; // By using the object of HTML element that we've cached, we can inject HTML into it.
}

// This is the first call since the function is not executed at first so we have to call it at the first time of page loading.
render();
```

## HOMEWORK_01

Write a simple webpage that show the images of cats [In row] with a nice way using your technique of HTML and CSS. The images URL can be found bellow in the `Array of objects` as a response from the server.
After showing the images, Add the name of the image bellow each image. Example:

Name: `tumblr_m3o5vhPKBa1rtuomto1_250.jpg`
Another example:
Name: `3v7.gif`

Use what you've learned from this chapter to implement the fewest code of implementation.

```js
[
  {
    breeds: [],
    id: "2f9",
    url: "https://26.media.tumblr.com/tumblr_m3o5vhPKBa1rtuomto1_250.jpg",
    width: 500,
    height: 333
  },
  {
    breeds: [],
    id: "3h0",
    url: "https://25.media.tumblr.com/tumblr_m3kg02GkLw1qjc1a7o1_250.jpg",
    width: 900,
    height: 600
  },
  {
    breeds: [],
    id: "3v7",
    url: "https://cdn2.thecatapi.com/images/3v7.gif",
    width: 245,
    height: 245
  },
  {
    breeds: [],
    id: "58l",
    url: "https://25.media.tumblr.com/tumblr_kop8wzgxHa1qzv5pwo1_250.jpg",
    width: 385,
    height: 500
  },
  {
    breeds: [],
    id: "9qn",
    url: "https://24.media.tumblr.com/tumblr_m27vjmHY8Y1qh66wqo1_250.png",
    width: 600,
    height: 800
  },
  {
    breeds: [],
    id: "aad",
    url: "https://24.media.tumblr.com/tumblr_m1vu8mrE0z1qze0hyo1_250.jpg",
    width: 1344,
    height: 1008
  },
  {
    breeds: [],
    id: "ae4",
    url: "https://cdn2.thecatapi.com/images/ae4.gif",
    width: 430,
    height: 242
  },
  {
    breeds: [],
    id: "auf",
    url: "https://25.media.tumblr.com/tumblr_m0v0feUY3X1qzwfgto1_250.png",
    width: 561,
    height: 554
  },
  {
    breeds: [],
    id: "dqn",
    url: "https://25.media.tumblr.com/tumblr_m4f8t9JGy11qejbiro1_250.jpg",
    width: 560,
    height: 480
  }
];
```
