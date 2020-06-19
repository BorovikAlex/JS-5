var milisec = 0,
  sec = 0,
  min = 0,
  stopwatch = document.getElementById("stopwatch"),
  stop = document.querySelector(".button-stop"),
  circle = document.querySelector(".button-circle"),
  start = document.querySelector(".button-start"),
  list = document.querySelector(".time-list"),
  clear = document.querySelector(".clear");

stopwatch.innerHTML = "00" + ":00" + ":00";

function starTimer() {
  milisec++;
  if (milisec >= 100) {
    sec++;
    milisec = milisec - 100;
  }
  if (sec >= 60) {
    min++;
    sec = sec - 60;
  }
  if (milisec < 10) {
    if (sec < 10) {
      if (min < 10) {
        stopwatch.innerHTML = "0" + min + ":0" + sec + ":0" + milisec;
      } else {
        stopwatch.innerHTML = min + ":0" + sec + ":0" + milisec;
      }
    } else {
      if (min < 10) {
        stopwatch.innerHTML = "0" + min + ":" + sec + ":0" + milisec;
      } else {
        stopwatch.innerHTML = min + ":" + sec + ":0" + milisec;
      }
    }
  } else {
    if (sec < 10) {
      if (min < 10) {
        stopwatch.innerHTML = "0" + min + ":0" + sec + ":" + milisec;
      } else {
        stopwatch.innerHTML = min + ":0" + sec + ":" + milisec;
      }
    } else {
      if (min < 10) {
        stopwatch.innerHTML = "0" + min + ":" + sec + ":" + milisec;
      } else {
        stopwatch.innerHTML = min + ":" + sec + ":" + milisec;
      }
    }
  }
}

start.addEventListener("click", function () {
  if (start.textContent === "Старт" || start.textContent === "Продолжить") {
    clearInterval(go);
    go = setInterval(starTimer, 10);
    start.innerHTML = "Пауза";
  } else {
    clearInterval(go);
    start.innerHTML = "Продолжить";
  }
});

stop.addEventListener("click", function () {
  clearInterval(go);
  stopwatch.innerHTML = "00" + ":00" + ":00";
  milisec = 0;
  sec = 0;
  min = 0;
  start.innerHTML = "Старт";
});

circle.addEventListener("click", function () {
  if (start.textContent === "Старт" || start.textContent === "Продолжить") {
    start.innerHTML = "Пауза";
  }
  var newLi = document.createElement("li");
  newLi.classList.add("new-li");
  newLi.innerHTML =
    "<p>" +
    "Круг " +
    i +
    ": " +
    "</p>" +
    "<span>" +
    stopwatch.textContent +
    "</span>";
  list.append(newLi);
  setTimeout(function () {
    newLi.classList.add("show");
  }, 10);
  i++;
  clearInterval(go);
  stopwatch.innerHTML = "00" + ":00" + ":00";
  milisec = 0;
  sec = 0;
  min = 0;
  go = setInterval(starTimer, 10);
});

var go;
var i = 1;
clear.addEventListener("click", function () {
  i = 1;
  list.innerHTML = "";
});
