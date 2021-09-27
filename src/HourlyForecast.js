import React from "react";
import WeatherIcon from "./WeatherIcon";

import "./HourlyForecast.css";

export default function HourlyForecast(props) {
  function hours() {
    let date = new Date(props.data[props.hour].dt * 1000);
    let hours = date.getHours();

    if (hours > 12) {
      return `${hours - 12} PM`;
    } else {
      return `${hours} AM`;
    }
  }

  return (
    <div className="HourlyForecast">
      <div className="ForecastHour">{hours()}</div>
      <WeatherIcon code={props.data[props.hour].weather[0].icon} size={50} />
      <div className="HourlyTemp">
        {Math.round(props.data[props.hour].temp)}°
      </div>
    </div>
  );
}
