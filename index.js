let homeScore = document.getElementById("home-scores");
let guestScore = document.getElementById("guest-scores");
let scoreline = 0;

function plus1() {
  scoreline += 1;
  homeScore.innerText = scoreline;

  console.log("clicked " + scoreline);
}

function plus11() {
  scoreline += 1;
  guestScore.innerText = scoreline;

  console.log("clicked " + scoreline);
}

function plus2() {
  scoreline += 2;
  homeScore.innerText = scoreline;

  console.log("clicked " + scoreline);
}

function plus22() {
  scoreline += 2;
  guestScore.innerText = scoreline;

  console.log("clicked " + scoreline);
}
function plus3() {
  scoreline += 3;
  homeScore.innerText = scoreline;

  console.log("clicked " + scoreline);
}

function plus33() {
  scoreline += 3;
  guestScore.innerText = scoreline;

  console.log("clicked " + scoreline);
}
