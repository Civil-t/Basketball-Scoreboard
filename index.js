let homeScore = document.getElementById("home-scores");
let guestScore = document.getElementById("guest-scores");
let homeScoreline = 0;
let guestScoreline = 0;

function plus1() {
  homeScoreline += 1;
  homeScore.innerText = homeScoreline;

  console.log("clicked " + homeScoreline);
}

function plus11() {
  guestScoreline += 1;
  guestScore.innerText = guestScoreline;

  console.log("clicked " + guestScoreline);
}

function plus2() {
  homeScoreline += 2;
  homeScore.innerText = homeScoreline;

  console.log("clicked " + homeScoreline);
}

function plus22() {
  guestScoreline += 2;
  guestScore.innerText = guestScoreline;

  console.log("clicked " + guestScoreline);
}
function plus3() {
  homeScoreline += 3;
  homeScore.innerText = homeScoreline;

  console.log("clicked " + homeScoreline);
}

function plus33() {
  guestScoreline += 3;
  guestScore.innerText = guestScoreline;

  console.log("clicked " + guestScoreline);
}
