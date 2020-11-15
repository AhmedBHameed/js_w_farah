# Basics of JavaScript instructions

## Statements

A script is a series of instructions that a computer can follow one-by-one. Each individual instruction or step is known as a statement. Groupe of statements should end with a semicolon `;` in one line, otherwise the semicolon is optional.

**Accepted code**

```js
console.log("I love JavaScript");
console.log("We love ES6");
```

**Not accepted code**

```js
console.log("JS code will get mad!") console.log("If you don't separate the code by semicolons")
```

## Comments

You should write comments to explain what your code does. They help make your code easier to read and understand. This can help you and others who read your code.

```js
//this is single line comment
/* This is a
Multi-line comment
You may see comments as dummy gray or green color depends on the editor.
*/

let today = new Date(); // Create an object from class date
let text = document.querySelector(".text"); // Find HTML tag that has class text and save it in text variable.
let hour = today.getHours();
let greeting;

// Display the appropriate greeting based on the current time
if (hour > 18) {
  greeting = "Good evening!";
} else if (hour > 12) {
  greeting = "Good afternoon!";
} else {
  greeting = "Good morning!";
}

text.innerText = greeting;
```

## Keywords

`Keywords` are simple words that are already reserved by the system. That means you can not use them as a `variable` since they already referring to special instruction.
