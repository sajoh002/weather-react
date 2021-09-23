import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            placeholder="Enter a city..."
            className="form-control"
          />{" "}
        </div>
        <div className="col-3">
          <input type="submit" value="Search" className="btn btn-secondary" />
        </div>
      </div>
      <h6>Thursday, September 23, 2021</h6>
      <h3>1:20 PM</h3>
      <h6>Baltimore</h6>
      <ReactAnimatedWeather icon="CLOUDY" />
      <h2>66°F</h2>
      <h3>Cloudy</h3>
      <hr />
      <div className="row">
        <div className="col-3">
          <h6>High:</h6>
          <p>73°</p>
        </div>
        <div className="col-3">
          <h6>Low:</h6>
          <p>52°</p>
        </div>
        <div className="col-3">
          <h6>Humidity:</h6>
          <p>69%</p>
        </div>
        <div className="col-3">
          <h6>Precipitation:</h6>
          <p>15%</p>
        </div>
      </div>
    </div>
  );
}
