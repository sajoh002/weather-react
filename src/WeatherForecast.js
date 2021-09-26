import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecast.css";

export default function WeatherForecast() {
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
