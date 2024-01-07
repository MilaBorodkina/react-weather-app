import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 id="currentCity">{props.data.city}</h1>
      <h3 id="currentDate">
        <FormattedDate date={props.data.date} />
      </h3>
      <h4>{props.data.description}</h4>
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
            {Math.round(props.data.temperature)}
          </span>
          <a href="." id="celsiusLnk" className="active">
            °C
          </a>
        </div>
      </div>
      <div className="row currentWeatherParametrs">
        <div className="col-6">
          Wind: <span id="currentWind">{props.data.wind}</span> km/h
        </div>
        <div className="col-6">
          Humidity: <span id="currentHumidity">{props.data.humidity}</span>%
        </div>
      </div>
      <div className="weather-forecast" id="forecast"></div>
    </div>
  );
}
