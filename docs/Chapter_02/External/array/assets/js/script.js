let arrayOfColors = ["green", "purple", "blue"]; // This is array creation
let changeH1Text = "This is text in green color"; // This is shorthand variable with text
console.log("Array of colors", arrayOfColors); // CHECKOUT WHAT IS GOING ON HERE BY PRINTING OUT RESULTS

console.log("color in index 4: ", arrayOfColors[4]); // CHECKOUT WHAT IS GOING ON HERE BY PRINTING OUT RESULTS

let el = document.getElementById("array"); // Grab html tag that has class name of "array"
console.log("Element:", el); // CHECKOUT WHAT IS GOING ON HERE BY PRINTING OUT RESULTS
el.textContent = changeH1Text; // Change text of the selected tag.
