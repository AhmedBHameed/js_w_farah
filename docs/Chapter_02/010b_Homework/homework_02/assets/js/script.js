let radius = 13;
let surfaceArea;

// Formula for calculating ball sphere
// surfaceArea = 4*PI*(radius*radius)

let PI = 3.14;

surfaceArea = 4 * PI * (radius * radius);

console.log("This is surfaceArea: ", surfaceArea);

// TODO DONE
let htmlMessageTag = document.getElementById("message");

if (surfaceArea >= 313.5 && surfaceArea <= 314) {
  // TODO
  htmlMessageTag.textContent = "This is a basketball";
} else {
  // TODO
  htmlMessageTag.textContent = "This is NOT a basketball";
}
