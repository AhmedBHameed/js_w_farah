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
