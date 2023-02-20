let now = new Date();
let date = document.querySelector("#exactDay");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
date.innerHTML = `${day}, ${hours}:${minutes}`;

function showWeather(response) {
  let city = document.querySelector("#city");
  let temperature = document.querySelector("#temperature");
  let humidity = document.querySelector("#humidity");
  let wind = document.querySelector("#wind");
  let description = document.querySelector("#description");
  let emoji = document.querySelector("#emoji");
  city.innerHTML = response.data.name;
  temperature.innerHTML = Math.round(response.data.main.temp);
  humidity.innerHTML = response.data.main.humidity;
  wind.innerHTML = Math.round(response.data.wind.speed);
  description.innerHTML = response.data.weather[0].main;
  emoji.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
}

function search(city) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}

function submit(event) {
  event.preventDefault();
  let city = document.querySelector("#country-input").value;
  search(city);
}

function searchLocation(position) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showWeather);
}
search("Lecco");
function CurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let form = document.querySelector("#country-form");
form.addEventListener("submit", submit);

let currentLocationButton = document.querySelector("#current");
currentLocationButton.addEventListener("click", CurrentLocation);

function changeTheme() {
  let body = document.querySelector("body");

  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
  }
}
let themeButton = document.querySelector("#theme-button");
themeButton.addEventListener("click", changeTheme);

function firstFreeLesson() {
  let ready = prompt("Are you ready for this new adventure?🥊🖤");

  let div = document.querySelector("div");
  if (ready === "yes") {
    div.innerHTML =
      "Let's start training🥊🖤" +
      "<br/>" +
      "<video src='https://www.shutterstock.com/shutterstock/videos/1083548719/preview/stock-footage-woman-fighter-trains-his-punches-beats-a-punching-bag-training-day-in-the-boxing-gym-female.webm' controls></video>";
  } else {
    div.innerHTML =
      "<img src='https://s3.amazonaws.com/shecodesio-production/uploads/files/000/063/249/original/TheOfficeDwightSchruteGIF.gif?1673962965'/>";
  }
}
let firstFreeLessonButton = document.querySelector(".firstLesson");
firstFreeLessonButton.addEventListener("click", firstFreeLesson);
