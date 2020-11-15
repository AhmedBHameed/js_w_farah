# Math object

The Math object has properties and methods
for mathematical constants and functions.

![math object](./math_object.png)

example found in **Examples/c03/js/math-object.js**

**HTML**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>
      JavaScript &amp; jQuery - Chapter 3: Functions, Methods &amp; Objects -
      Math Object
    </title>
    <link rel="stylesheet" href="css/c03.css" />
  </head>
  <body>
    <h1>TravelWorthy</h1>
    <div id="info"></div>
    <script src="js/math-object.js"></script>
  </body>
</html>
```

**JavaScript**

```js
// Create a variable to hold a random number between 1 and 10
var randomNum = Math.floor(Math.random() * 10 + 1);

// Create a variable called el to hold the element whose id attribute has a value of info
var el = document.getElementById("info");
// Write the number into that element
el.innerHTML = "<h2>random number</h2><p>" + randomNum + "</p>";
```

# Date object

In order to work with dates, you create an instance of the Date object. You can then specify the time and date that want it to represent.

**To create new instance from a `class` you have to use keyword `new`. Since Date object is a built in class then you should use `new` keyword to be used.**

![date object](./date_class.png)

Methods from date object are:

![date methods](./date_methods.png)

example found in **Examples/c03/js/date-object.js**

**HTML**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>
      JavaScript &amp; jQuery - Chapter 3: Functions, Methods &amp; Objects -
      Date Object
    </title>
    <link rel="stylesheet" href="css/c03.css" />
  </head>
  <body>
    <h1>TravelWorthy</h1>
    <div id="footer"></div>
    <script src="js/date-object.js"></script>
  </body>
</html>
```

**JavaScript**

```js
// Create a variable to hold a new Date object (defaults to now)
var today = new Date();
// Create a variable to hold the year this year
var year = today.getFullYear();

// Create a variable called el to hold the element whose id attribute has a value of footer
var el = document.getElementById("footer");
// Write the year into that element.
el.innerHTML = "<p>Copyright &copy;" + year + "</p>";
```

**Another example**
example found in **Examples/c03/js/date-object-difference.js**

**HTML**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>
      JavaScript &amp; jQuery - Chapter 3: Functions, Methods &amp; Objects -
      Date Object Difference
    </title>
    <link rel="stylesheet" href="css/c03.css" />
  </head>
  <body>
    <h1>TravelWorthy</h1>
    <div id="message">Established 1945</div>
    <script src="js/date-object-difference.js"></script>
  </body>
</html>
```

**JavaScript**

```js
// Create a variable to hold a new Date object (defaults to now)
var today = new Date();
// Get the year this year
var year = today.getFullYear();
// Set the date that the company was established
var est = new Date("Apr 16, 1996 15:45:55");
// Get difference between then & now in milliseconds
var difference = today.getTime() - est.getTime();
// Divide by number of milliseconds to get years
difference = difference / 31556900000;

// Create a variable called elMsg to hold the element whose id attribute has a value of message
var elMsg = document.getElementById("message");
// Write the message into that element.
elMsg.textContent = Math.floor(difference) + " years of online travel advice";
```
