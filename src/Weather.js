import React, { useState } from "react";
import ReactAnimatedWeather from "react-animated-weather";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      high: response.data.main.temp_max,
      low: response.data.main.temp_min,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
              autoFocus="on"
            />{" "}
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-secondary w-100"
            />
          </div>
        </div>
        <h4 className="mt-4">
          <FormattedDate date={weatherData.date} />
        </h4>
        <h4 className="mt-3">
          <FormattedTime />
        </h4>
        <h2 className="mt-3 mb-4">{weatherData.city}</h2>
        <ReactAnimatedWeather icon="CLEAR_DAY" color="white" size={250} />
        <h2 className="mt-3">{Math.round(weatherData.temperature)}°F</h2>
        <h3 className="mb-4 text-capitalize">{weatherData.description}</h3>
        <hr />
        <div className="row">
          <div className="col-3">
            <h6>High:</h6>
            <p>{Math.round(weatherData.high)}°</p>
          </div>
          <div className="col-3">
            <h6>Low:</h6>
            <p>{Math.round(weatherData.low)}°</p>
          </div>
          <div className="col-3">
            <h6>Humidity:</h6>
            <p>{weatherData.humidity}%</p>
          </div>
          <div className="col-3">
            <h6>Wind:</h6>
            <p>{Math.round(weatherData.wind)} mph</p>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "979b0f0f351a5c4ea430dfe10b13b53f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading";
  }
}
