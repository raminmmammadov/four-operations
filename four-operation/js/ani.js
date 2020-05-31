/* Demo intro for www.eightyears.co.uk
looks better on site with icon-font ballons
*/

//Intro Balloon Pops - colour changes
var balloonsContainer = document.getElementById("balloons-container"),
  balloons = balloonsContainer.childNodes,
  introTitle = document.getElementById("intro-title"),
  introSub = document.getElementById("intro-sub"),
  introBut = document.getElementById("intro-button");

for (var i = 0; i < balloons.length; i++) {
  var balloon = balloons[i];
  balloon.addEventListener("click", pop, false);
}

function pop(e) {
  var element = e.target;
  if (element.classList.contains("yellow")) {
    intro.style.background = "rgb(235,255,20)";
    introBut.className = "button-yellow";
    if (introTitle.style.color !== "rgb(51,51,51)") {
      introTitle.style.color = "rgb(51,51,51)";
      introSub.style.color = "rgba(51,51,51,.8)";
    }
  } else if (element.classList.contains("blue")) {
    intro.style.background = "rgb(39,20,255)";
    introBut.className = "button-blue";
    if (introTitle.style.color !== "rgb(255,255,255)") {
      introTitle.style.color = "rgb(255,255,255)";
      introSub.style.color = "rgba(255,255,255,.8)";
    }
  } else if (element.classList.contains("purple")) {
    intro.style.background = "rgb(189,96,255)";
    introBut.className = "button-purple";
    if (introTitle.style.color !== "rgb(255,255,255)") {
      introTitle.style.color = "rgb(255,255,255)";
      introSub.style.color = "rgba(255,255,255,.8)";
    }
  } else if (element.classList.contains("red")) {
    intro.style.background = "rgb(255,39,20)";
    introBut.className = "button-red";
    if (introTitle.style.color !== "rgb(255,255,255)") {
      introTitle.style.color = "rgb(255,255,255)";
      introSub.style.color = "rgba(255,255,255,.8)";
    }
  } else if (element.classList.contains("cyan")) {
    intro.style.background = "rgb(20,235,255)";
    introBut.className = "button-cyan";
    if (introTitle.style.color !== "rgb(255,255,255)") {
      introTitle.style.color = "rgb(255,255,255)";
      introSub.style.color = "rgba(255,255,255,.8)";
    }
  } else if (element.classList.contains("pink")) {
    intro.style.background = "rgb(255,138,187)";
    introBut.className = "button-pink";
    if (introTitle.style.color !== "rgb(255,255,255)") {
      introTitle.style.color = "rgb(255,255,255)";
      introSub.style.color = "rgba(255,255,255,.8)";
    }
  } else if (element.classList.contains("green")) {
    intro.style.background = "rgb(20,189,34)";
    introBut.className = "button-green";
    if (introTitle.style.color !== "rgb(255,255,255)") {
      introTitle.style.color = "rgb(255,255,255)";
      introSub.style.color = "rgba(255,255,255,.8)";
    }
  } else if (element.classList.contains("orange")) {
    intro.style.background = "rgb(255,171,53)";
    introBut.className = "button-orange";
    if (introTitle.style.color !== "rgb(255,255,255)") {
      introTitle.style.color = "rgb(255,255,255)";
      introSub.style.color = "rgba(255,255,255,.8)";
    }
  }
  element.style.display = "none";
  e.preventDefault();
  e.stopPropagation();
}
