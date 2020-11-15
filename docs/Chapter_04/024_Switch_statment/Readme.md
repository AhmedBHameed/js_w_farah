# SWITCH STATEMENT

A `Switch` statement start with a variable called the `switch value`.
Each case indicate a possible value for this variable and the code that should run if the variable matches that value.

```js
switch (level) {
    case 'One':
        title = 'Level 1'
        break;
    case 'Two':
        title = 'Level 2'
        break;
    case 'Three':
        title = 'Level 3'
        break;
    default '':
        title = 'Test'
}
```

## WHICH TO USE (IF..ELSE) OR (SWITCH)

When possible to use `switch` then use it, else use `if...else`

| if...else                                                                                                                         | switch                                                                                                 |
| --------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| 1- There is not need to provide an else option. (You can just use an if statement)                                                | You have a `default` option that is run if none of the cases match.                                    |
| 2- Witch a series of `if` statements, they are all checked even if a match has been found (so it performs more slowly than witch) | If match is found, that code is run. Then the break statement stops the rest of the `switch` statement | running (providing better performance than multiple if statement) |

example found in <a target="_blank" href="Chapter_04/Examples/c04/switch-statement.html">**Chapter_04/Examples/c04/switch-statement.html**</a>

**HTML**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>
      JavaScript &amp; jQuery - Chapter 4: Decisions &amp; Loops - Switch
      Statement
    </title>
    <link rel="stylesheet" href="css/c04.css" />
  </head>
  <body>
    <section id="page1">
      <h1>Bullseye</h1>
      <img src="images/teacher.png" id="teacher" alt="teacher" />
      <section id="answer"></section>
    </section>
    <script src="js/switch-statement.js"></script>
  </body>
</html>
```

**JavaScript**

```js
var msg; // Message
var level = 2; // Level

// Determine message based on level
switch (level) {
  case 1:
    msg = "Good luck on the first test";
    break;

  case 2:
    msg = "Second of three - keep going!";
    break;

  case 3:
    msg = "Final round, almost there!";
    break;

  default:
    msg = "Good luck!";
    break;
}

var el = document.getElementById("answer");
el.textContent = msg;
```
