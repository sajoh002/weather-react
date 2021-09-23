import React from "react";
import Form from "./Form";
import TodaysWeather from "./TodaysWeather";

import "./Border.css";

export default function Border() {
  return (
    <div className="Border">
      <Form />
      <TodaysWeather />
    </div>
  );
}
