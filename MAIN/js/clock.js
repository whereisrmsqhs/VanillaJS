const clock = document.querySelector("#clock");
const fullDay = document.querySelector("#fullDay");

function convertDay(numDay) {
  const vocDay = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return vocDay[numDay];
}

function getClock() {
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth()).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const dow = convertDay(date.getDay());
  fullDay.innerText = `${year}.${month}.${day} ${dow}`;

  const hour = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hour}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
