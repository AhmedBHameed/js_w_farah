let arrayOfTexts = [
  "Hello Everyone",
  "This is JavaScript course",
  "Wish you all the luck."
];

let arrayIndex = 0;

let arrayOfHeaderTitles = document.getElementsByClassName("header-title");

// arrayOfHeaderTitles[0].textContent = arrayOfTexts[arrayIndex];

// PLEASE DO NOT BE CONFUSED FROM THE FOLLOWING CODE

setInterval(() => {
  // FOCUS HERE
  // GOOD PRACTICE
  arrayIndex = arrayIndex % 3;

  // BAD PRACTICE
  // if (arrayIndex == 3) {
  //     arrayIndex = 0;
  // }
  // GOOD PRACTICE
  arrayOfHeaderTitles[0].textContent = arrayOfTexts[arrayIndex++];

  // BAD PRACTICE
  // arrayIndex = arrayIndex + 1;
}, 2000);
