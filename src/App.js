import Weather from "./Weather";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <p>
          <a
            href="https://github.com/sajoh002/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            Coded
          </a>{" "}
          by Sarah Johnson
        </p>
      </div>
    </div>
  );
}
