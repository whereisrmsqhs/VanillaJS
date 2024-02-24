const dDay = document.querySelector(".d-day");

function calculateDay() {
  const startDate = new Date("2024/02/17");
  const now = new Date();

  const diffTime = Math.abs(now.getTime() - startDate.getTime());
  const dayDif = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  dDay.innerText = `FrontEnd 공부한지 ${dayDif}일차`;
}

calculateDay();
