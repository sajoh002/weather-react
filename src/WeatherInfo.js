import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h4 className="mt-4">
        <FormattedDate date={props.info.date} />
      </h4>
      <h4 className="mt-3">
        <FormattedTime />
      </h4>
      <h2 className="mt-3 mb-4">{props.info.city}</h2>
      <WeatherIcon code={props.info.icon} />
      <h2 className="mt-3">{Math.round(props.info.temperature)}°F</h2>
      <h3 className="mb-4 text-capitalize">{props.info.description}</h3>
      <hr />
      <div className="row">
        <div className="col-3">
          <h6>High:</h6>
          <p>{Math.round(props.info.high)}°</p>
        </div>
        <div className="col-3">
          <h6>Low:</h6>
          <p>{Math.round(props.info.low)}°</p>
        </div>
        <div className="col-3">
          <h6>Humidity:</h6>
          <p>{props.info.humidity}%</p>
        </div>
        <div className="col-3">
          <h6>Wind:</h6>
          <p>{Math.round(props.info.wind)} mph</p>
        </div>
      </div>
    </div>
  );
}
