import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

import "./TodaysWeather.css";

export default function TodaysWeather() {
  return (
    <div className="TodaysWeather">
      <div className="row">
        <div className="col-md-7">
          <div className="card border-0 bg-transparent">
            <h1 className="card-header border-0 bg-transparent pt-4">
              New York
            </h1>
            <div className="card-body">
              <ul>
                <li>Last updated: 5:00 PM</li>

                <li>Humidity: 50%</li>
                <li>Wind Speed: 12 mph</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <div className="card border-0 bg-transparent">
            <div className="pt-4">
              <ReactAnimatedWeather icon="RAIN" color="white" size={150} />
            </div>
            <div className="card-body">
              <h4 className="card-title">Current Temperature:</h4>
              <p className="card-text">83°F</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
