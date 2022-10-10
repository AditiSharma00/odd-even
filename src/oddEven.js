function generateNumber() {
  // generate a random integer(hint : Math.random)
  let num = Math.floor(Math.random() * 100);
  //update number element on UI
  let numElement = document.getElementById("number");
  numElement.innerText = num;
  checkOddEven(num);
}

function checkOddEven(num) {
  // logic for even / odd
  var out = num % 2 === 0 ? "The number is even" : "The number is odd";
  let oddEven = document.getElementById("odd-even");
  oddEven.innerText = out;
}

window.onload = function () {
  // add event listeners to the button here
  let btn = document.getElementById("generate-number");
  btn.addEventListener("click", generateNumber);
};

// donot change the following export statement

if (typeof exports !== "undefined") {
  module.exports = {
    generateNumber,
    checkOddEven,
  };
}
