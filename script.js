const timerDisplay = document.querySelector("#timer");
const startStopBtn = document.querySelector("#start-stop");
const resetBtn = document.querySelector("#reset");
let intervalId;
let timer = 0;

startStopBtn.addEventListener("click", () => {
  if (startStopBtn.innerHTML === "Start") {
    startStopBtn.innerHTML = "Stop";
    intervalId = setInterval(() => {
      timer++;
      let seconds = timer % 60;
      let minutes = Math.floor(timer / 60) % 60;
      let hours = Math.floor(timer / 3600);
      timerDisplay.innerHTML = `${hours
        .toString()
        .padStart(2, "0")}:${minutes
        .toString()
        .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    }, 1000);
  } else {
    stop();
  }
});

function stop() {
  startStopBtn.innerHTML = "Start";
  clearInterval(intervalId);
}

resetBtn.addEventListener("click", () => {
  stop();
  timer = 0;
  timerDisplay.innerHTML = "00:00:00";
});
