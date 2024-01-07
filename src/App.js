import React, { useState } from "react";
import "./App.css";
import axios from "axios";

export default function App() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="card">
          <div className="card-body">
            <form>
              <div className="row">
                <div className="col-8">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="inputCity"
                      placeholder="Enter City..."
                      autocomplete="off"
                    />
                  </div>
                </div>
                <div className="col-2">
                  <input type="submit" className="btn btn-light" value="🔍" />
                </div>
                <div className="col-2">
                  <input
                    type="submit"
                    className="btn btn-light"
                    id="locationButton"
                    value="📌"
                  />
                </div>
              </div>
            </form>
            <h1 id="currentCity">London</h1>
            <h3 id="currentDate">Monday, April 18, 16:48</h3>
            <h4>{weatherData.description}</h4>
            <div className="row currentWeather">
              <div className="col-6 currentWeatherImage">
                <img
                  src="https://openweathermap.org/img/wn/01d.png"
                  className="forecastImage"
                  alt="Clear "
                  id="weatherIcon"
                />
              </div>
              <div className="col-6 currentWeatherTemperature">
                <span id="currentTemperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <a href="." id="celsiusLnk" className="active">
                  °C
                </a>
              </div>
            </div>
            <div className="row currentWeatherParametrs">
              <div className="col-6">
                Wind: <span id="currentWind">{weatherData.wind}</span> km/h
              </div>
              <div className="col-6">
                Humidity:{" "}
                <span id="currentHumidity">{weatherData.humidity}</span>%
              </div>
            </div>
            <div className="weather-forecast" id="forecast"></div>
          </div>
        </div>
        <div>
          <a
            id="githubLink"
            href="https://github.com/MilaBorodkina/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          by Mila Borodkina
        </div>
      </div>
    );
  } else {
    let apiKey = "f8358c3b4c7c346ec83ab41fd2e14bba";
    let city = "Prague";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
