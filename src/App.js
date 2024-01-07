import React from "react";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Prague" />
        <footer>
          <a
            id="githubLink"
            href="https://github.com/MilaBorodkina/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          by Mila Borodkina
        </footer>
      </div>
    </div>
  );
}
