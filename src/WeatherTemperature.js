import React, { useState } from "react";

import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function ShowCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function ShowFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function celsius() {
    return ((props.fahrenheit - 32) * 5) / 9;
  }

  if (unit === "fahrenheit") {
    return (
      <div className="WeatherTemperature">
        <h2 className="mt-3">
          {Math.round(props.fahrenheit)}{" "}
          <span className="unit">
            °F |{" "}
            <a href="/" onClick={ShowCelsius}>
              °C
            </a>
          </span>
        </h2>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <h2 className="mt-3">
          {Math.round(celsius())}{" "}
          <span className="unit">
            <a href="/" onClick={ShowFahrenheit}>
              °F
            </a>{" "}
            | °C
          </span>
        </h2>
      </div>
    );
  }
}
