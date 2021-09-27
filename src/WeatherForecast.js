import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";
import HourlyForecast from "./HourlyForecast";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
    load();
  }, [props.coordinates]);

  function handleResponse(response) {
    setHourlyForecast(response.data.hourly);
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    const apiKey = "979b0f0f351a5c4ea430dfe10b13b53f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&exclude={part}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <h4 className="text-start mb-3">Hourly Forecast</h4>
        <div className="row">
          <div className="col">
            <HourlyForecast data={hourlyForecast} hour={0} />
          </div>
          <div className="col">
            <HourlyForecast data={hourlyForecast} hour={1} />
          </div>
          <div className="col">
            <HourlyForecast data={hourlyForecast} hour={2} />
          </div>
          <div className="col">
            <HourlyForecast data={hourlyForecast} hour={3} />
          </div>
          <div className="col">
            <HourlyForecast data={hourlyForecast} hour={4} />
          </div>
        </div>
        <hr />
        <h4 className="text-start mb-3">5-Day Forecast</h4>
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index > 0 && index < 6) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
