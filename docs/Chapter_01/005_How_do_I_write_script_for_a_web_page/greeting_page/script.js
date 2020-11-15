let today = new Date();
let text = document.querySelector(".text");
let hour = today.getHours();
let greeting;

if (hour > 18) {
  greeting = "Good evening!";
} else if (hour > 12) {
  greeting = "Good afternoon!";
} else {
  greeting = "Good morning!";
}

text.innerText = greeting;
