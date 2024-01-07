import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
          <WeatherIcon code={props.data.icon} size={52} />
        </div>
        <WeatherTemperature celsius={props.data.temperature} />
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
