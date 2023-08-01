function getWeatherData(location) {
    const apiKey = "YOUR_API_KEY";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=4197bb4d70563bb7fca44a8492a53134&units=metric`;
    return fetch(url)
      .then(response => response.json())
      .then(data => {
        const weatherData = {
          temperature: data.main.temp,
          condition: data.weather[0].main,
          location: data.name,
          pressure:data.main.pressure,
          humidity:data.main.humidity
        };
        return weatherData;
      });
  }

  function updateUI(weatherData) {
    const temperature = document.querySelector("#temperature");
    const condition = document.querySelector("#condition");
    const location = document.querySelector("#location");
    const pressure= document.querySelector("#pressure");
  
    temperature.textContent = `${weatherData.temperature}°C`;
    condition.textContent = weatherData.condition;
    location.textContent = weatherData.location;
    pressure.textContent=`Pressure: ${weatherData.pressure}`;
    humidity.textContent=`Humidity: ${weatherData.humidity}`;
  }

  const searchBtn = document.querySelector("#search-btn");
const searchBar = document.querySelector("#search-bar");

searchBtn.addEventListener("click", () => {
  const location = searchBar.value;
  getWeatherData(location)
    .then(weatherData => {
      updateUI(weatherData);
    })
    .catch(error => {
      console.log(error);
    });
});