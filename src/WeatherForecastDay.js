import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./WeatherForecastDay.css";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

    return days[day];
  }

  return (
    <div clasName="WeatherForecastDay">
      <div className="ForecastDay">{day()}</div>
      <WeatherIcon code={props.weather[0].icon} size={50} />
      <div className="ForecastTemperatures">
        <span className="ForecastHigh">{Math.round(props.temp.max)}°</span>{" "}
        <span className="ForecastLow">{Math.round(props.temp.min)}°</span>
      </div>
    </div>
  );
}
