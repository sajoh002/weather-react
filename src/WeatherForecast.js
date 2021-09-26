import React from "react";
import axios from "axios";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  const apiKey = "979b0f0f351a5c4ea430dfe10b13b53f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&exclude={part}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="ForecastDay">Thu</div>
          <WeatherIcon code="13d" size={50} />
          <div className="ForecastTemperatures">
            <span className="ForecastHigh">19°</span>{" "}
            <span className="ForecastLow">10°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
