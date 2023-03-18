
nextButton.addEventListener("click", nextQuestion);
function startTimer(duration, timerElement) {
let timer = duration, minutes, seconds;
setInterval(function () {
minutes = parseInt(timer / 60, 10);
seconds = parseInt(timer % 60, 10);

minutes = minutes < 10 ? "0" + minutes : minutes;
seconds = seconds < 10 ? "0" + seconds : seconds;

timerElement.textContent = minutes + ":" + seconds;

if (--timer < 0) {
timer = duration;
}
}, 1000);
}

const timerElement = document.getElementById("timer");
const duration = 30 * 60;
startTimer(duration, timerElement);



