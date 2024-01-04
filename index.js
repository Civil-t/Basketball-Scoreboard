let homeScore = document.getElementById("home-scores");
let guestScore = document.getElementById("guest-scores");
let homeScoreline = 0;
let guestScoreline = 0;

function plus1() {
  homeScoreline += 1;
  homeScore.innerText = homeScoreline;
}

function plus11() {
  guestScoreline += 1;
  guestScore.innerText = guestScoreline;
}

function plus2() {
  homeScoreline += 2;
  homeScore.innerText = homeScoreline;
}

function plus22() {
  guestScoreline += 2;
  guestScore.innerText = guestScoreline;
}
function plus3() {
  homeScoreline += 3;
  homeScore.innerText = homeScoreline;
}

function plus33() {
  guestScoreline += 3;
  guestScore.innerText = guestScoreline;
}

function newGame() {
  homeScoreline = 0;
  guestScoreline = 0;
  homeScore.innerText = homeScoreline;
  guestScore.innerText = guestScoreline;
  countDown();
}

function countDown() {
  let count = 24 * 60; // convert to seconds
  let countDown = setInterval(function () {
    let minutes = Math.floor(count / 60);
    let seconds = count % 60;
    document.getElementById("time").innerHTML =
      minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
    count--;
    if (count === 0) {
      clearInterval(countDown);
      document.getElementById("time").innerHTML = "Time's Up!";
    }
  }, 1500);
}
