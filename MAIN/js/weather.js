const API_KEY = "4ef2bf5138ff966025b8804329703079";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  console.log(`Your location is ${lat} ${lon}`);

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  )
    .then((res) => res.json())
    .then((data) => {
      const loc = document.querySelector(".loc");
      const temperature = document.querySelector(".temperature");
      const weather = document.querySelector(".weather");
      const specific = document.querySelector(".weather-specific");
      console.log(loc);
      loc.innerHTML = data.name;
      temperature.innerText = data.main.temp;
      weather.innerText = data.weather[0].main;
      specific.innerText = data.weather[0].description;
    });
}

function onGeoError() {
  alert("I can't find your location's weather");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
