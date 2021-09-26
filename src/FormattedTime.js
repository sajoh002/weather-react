import React from "react";

export default function FormattedTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours > 12) {
    hours = hours - 12;
    return (
      <div>
        {hours}:{minutes} PM
      </div>
    );
  } else {
    return (
      <div>
        {hours}:{minutes} AM
      </div>
    );
  }
}
