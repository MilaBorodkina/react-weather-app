import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

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

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "f8358c3b4c7c346ec83ab41fd2e14bba";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-8">
                  <div className="mb-3">
                    <input
                      type="search"
                      className="form-control"
                      id="inputCity"
                      placeholder="Enter City..."
                      autocomplete="on"
                      onChange={handleCityChange}
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
            <WeatherInfo data={weatherData} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
