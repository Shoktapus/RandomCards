/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
};

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
let randomNum = numbers[Math.floor(Math.random() * numbers.length)];
const suits = ["♦", "♥", "♠", "♣"];
let randomSuit = suits[Math.floor(Math.random() * suits.length)];
if (randomSuit === suits[0] || randomSuit === suits[1]) {
  document.querySelector("#suit").style.color = "red";
  document.querySelector("#suitTwo").style.color = "red";
}
//get element id would also work in line 12 but the # isn't necessary
// document.getElementById("demo").innerHTML = randomNum;
document.querySelector("#demo").innerHTML = randomNum;
document.querySelector("#suit").innerHTML = randomSuit;
document.querySelector("#suitTwo").innerHTML = randomSuit;
