/* 

Instructions: when a user clicks on one of the colored dots, the    background color of the entire page changes to match that dot. You should not need to change any HTML or CSS. 

Hint: Classes for each color have already been defined in the CSS tab.

*/

// 1 -- Select each button

let grayBtn = document.getElementById("grayButton");
let whiteBtn = document.getElementById("whiteButton");
let blueBtn = document.getElementById("blueButton");
let yellowBtn = document.getElementById("yellowButton");

// 3 -- Write an event handler to change the color of the page when each circle is pressed.

function switchToGray() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "#ff99c8";
  body.style.color = "#c4fff9";
}

function switchToWhite() {
    let body = document.querySelector("body");
    body.style.backgroundColor = "#d0f4de";
    body.style.color = "#ff686b";
  }

function switchToBlue() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "#a9def9";
  body.style.color = "#9381ff";
}

function switchToYellow() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "#e4c1f9";
  body.style.color = "#ffff3f";
}
// 2 -- Add an event listener to each circle
grayBtn.addEventListener("click", switchToGray);
whiteBtn.addEventListener("click", switchToWhite);
blueBtn.addEventListener("click", switchToBlue);
yellowBtn.addEventListener("click", switchToYellow);