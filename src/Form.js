import React from "react";

import "./Form.css";

export default function Form() {
  return (
    <form className="CitySearch">
      <div className="input-group">
        <input
          type="search"
          className="form-control"
          placeholder="Enter a City..."
          aria-label="Recipient's username with two button addons"
          id="city"
          autoComplete="off"
        />
        <button
          type="submit"
          className="btn btn-secondary"
          id="new-city-search"
        >
          Search
        </button>
        <button type="submit" className="btn btn-dark">
          Current Location
        </button>
      </div>
    </form>
  );
}
