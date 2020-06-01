"use strick";
var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
var operator = document.getElementById("operator");
var result = document.getElementById("result");
var form = document.getElementById("form");
var RightAnswer = document.getElementById("true");
var FalseAnswer = document.getElementById("false");
var dislike = document.getElementById("dislike");
var next = document.getElementById("next");
var error = document.getElementById("error");
var list = document.getElementById("list");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var count = document.getElementById("count");

document.getElementById("like").style.opacity = 0;
document.getElementById("dislike").style.opacity = 0;

function RandomNumber(min, max) {
  var number = Math.floor(Math.random() * (max - min) + min);
  return number;
}

function newQuestion() {
  var Operation = ["*", "/", "+", "-"];
  operator.textContent = Operation[RandomNumber(0, 4)];
  number1.textContent = Number(RandomNumber(0, 50));
  number2.textContent = Number(RandomNumber(0, 50));

  while (true) {
    number2.textContent = Number(RandomNumber(0, 50));
    if (number1.textContent % number2.textContent == 0) {
      break;
    }
  }
}

window.onload = function () {
  newQuestion();
};

function old_answers(num1, num2, operator, result) {
  var p = document.createElement("p");
  list.insertBefore(p, list.getElementsByTagName("p")[0]);
  p.innerHTML =
    '<i class="fas fa-pen"></i> ' +
    num1 +
    operator.textContent +
    " " +
    num2 +
    " = " +
    result.value;
}

function count_answers(num1, num2) {
  return num1 + num2;
}

function AppResult(e) {
  var ans, num1, num2;
  num1 = Number(number1.textContent);
  num2 = Number(number2.textContent);
  switch (operator.textContent) {
    case "*":
      ans = num1 * num2;
      break;
    case "/":
      ans = num1 / num2;
      break;
    case "+":
      ans = num1 + num2;
      break;
    case "-":
      ans = num1 - num2;
      break;
    default:
      break;
  }

  if (result.value == "") {
    error.style.display = "block";
    setTimeout(function (e) {
      error.style.display = "none";
    }, 1500);
  } else if (Number(result.value) === ans) {
    RightAnswer.textContent = Number(RightAnswer.textContent) + 1;
    document.getElementById("like").style.opacity = 1;
    setTimeout(function (e) {
      document.getElementById("like").style.opacity = 0;
    }, 1500);
    count.innerHTML = count_answers(
      Number(RightAnswer.textContent),
      Number(FalseAnswer.textContent)
    );
    old_answers(num1, num2, operator, result);
    newQuestion();
  } else {
    FalseAnswer.textContent = Number(FalseAnswer.textContent) + 1;
    document.getElementById("dislike").style.opacity = 1;
    setTimeout(function (e) {
      document.getElementById("dislike").style.opacity = 0;
    }, 1500);
    count.innerHTML = count_answers(
      Number(RightAnswer.textContent),
      Number(FalseAnswer.textContent)
    );

    old_answers(num1, num2, operator, result);

    newQuestion();
  }
  if (Number(RightAnswer.textContent) == 1) {
    document.getElementById("one").style.color = "darkred";
  } else if (Number(RightAnswer.textContent) == 2) {
    document.getElementById("two").style.color = "red";
  } else if (Number(RightAnswer.textContent) == 3) {
    document.getElementById("three").style.color = "yellow";
  } else if (Number(RightAnswer.textContent) == 4) {
    document.getElementById("four").style.color = "orange";
  } else if (Number(RightAnswer.textContent) == 5) {
    document.getElementById("five").style.color = "green";
    document.getElementById("intro").style.display = "flex";
  }
  result.value = "";
}

form.onsubmit = function (e) {
  e.preventDefault();
  AppResult();
};

next.onclick = function () {
  newQuestion();
  FalseAnswer.textContent = Number(FalseAnswer.textContent) + 1;
  document.getElementById("dislike").style.opacity = 1;
  setTimeout(function (e) {
    document.getElementById("dislike").style.opacity = 0;
  }, 1500);
  result.value = "";
};

var colors = [
  "blue",
  "red",
  "green",
  "purple",
  "orange",
  "navy",
  "darkred",
  "lightskyblue",
  "teal",
  "tomato",
];
var h2 = document.getElementById("footer_h2");
setInterval(function () {
  var i = parseInt(Math.random() * colors.length);
  h2.style.color = colors[i];
}, 1000);
