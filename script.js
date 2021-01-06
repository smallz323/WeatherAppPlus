let now = new Date();
let clock = document.querySelector("#city-time");
let hour = now.getHours();
if (hour < 10) {
  hour= `0${hour}`
}
let minutes = now.getMinutes();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day = days[now.getDay()];
if (minutes < 10) {minutes = `0${minutes}`
}

clock.innerHTML = `${day} ${hour}:${minutes}`;



function showTemperature(response) {
  let temperatureElement = document.querySelector("#header-temperature");
  let weatherIcon = response.data.weather[0].icon;
  document.querySelector("#header-city").innerHTML = response.data.name;
  document.querySelector("#humid").innerHTML = `Humidity: ` + response.data.main.humidity + `%`;
  document.querySelector("#feels-like").innerHTML = `Feels like: ` + Math.round(response.data.main.feels_like) + `⁰F`;
  document.querySelector("#weather-icon-text").innerHTML = response.data.weather[0].description;
  document.querySelector("#wind").innerHTML = `Wind speed: ` + Math.round(response.data.wind.speed) + `m/h`;
  
  document.querySelector("#icon").setAttribute("src", `http://openweathermap.org/img/wn/${weatherIcon}@2x.png`);
  

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  
}

  
  function showSearch(event) {
    event.preventDefault();
    let city = document.querySelector("#city-input-search").value;
    let apiKey = "7c07f64ee1982ca6ea82de6d739ef2af";
    let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
    let apiUrl = `${apiEndpoint}?q=${city}&units=imperial&appid=${apiKey}`;

    axios.get(apiUrl).then(showTemperature);
  };

function celsiusTemperature(event) {
  event.preventDefault();
  let celsisusDisplayTemperature = Math.round((62 - 32) * 5/9) ;
  let temperatureElement = document.querySelector("#header-temperature");
  temperatureElement.innerHTML = celsisusDisplayTemperature;
}


  let weatherButton = document.querySelector("#search-city");
weatherButton.addEventListener("submit", showSearch);
  
let celsiusConvert = document.querySelector("#celsius-convert");
celsiusConvert.addEventListener("click", celsiusTemperature);
