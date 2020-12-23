let now = new Date();
let clock = document.querySelector("div.date-time");
let hour = now.getHours();
let minutes = now.getMinutes();

let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[now.getDay()];

clock.innerHTML = `${day} ${hour}:${minutes}`;


function showTemperature(response) {

  document.querySelector("#header-temperature").innerHTML = Math.round (response.data.main.temp);
  document.querySelector("#header-city").innerHTML = response.data.name;
  document.querySelector("#wind").innerHTML = `Wind Speed : `+ Math.round(response.data.wind.speed) + `m/h`
  document.querySelector("#humid").innerHTML = `Humidity : ` + response.data.main.humidity + `%`;
  document.querySelector("#feels-like").innerHTML = `Feels Like: ` + Math.round(response.data.main.feels_like) + `⁰F` 
  document.querySelector("#weather-badge").innerHTML = response.data.weather[0].description;
}

function userGeoLocation(event) {
  event.preventDefault();
  navigator.geolocation.userGeoLocation(searchLocation);
};
function showSearch(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input-search").value;
  let apiKey = "7c07f64ee1982ca6ea82de6d739ef2af";
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiUrl = `${apiEndpoint}?q=${city}&units=imperial&appid=${apiKey}`;

  axios.get(apiUrl).then(showTemperature);
};
let weatherButton = document.querySelector("#search-city");
weatherButton.addEventListener("submit", showSearch)

///
let currentLocationButton = document.querySelector("#current-location");
currentLocationButton.addEventListener("click", userGeoLocation);



