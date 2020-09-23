import React from "react";
import "./WeatherCard.css";

function WeatherCard({ ciudad, pais, resultado }) {
  const iconIMG = resultado.weather[0];
  console.log(iconIMG);
  return (
    <div class="card">
      <h2>{ciudad}</h2>
      <h3>
        Cloudy
        <span>
          Wind 10km/h <span class="dot">•</span> Precip 0%
        </span>
      </h3>
      <h1>23°</h1>
      <div class="sky">
        <div class="sun"></div>
        <div class="cloud">
          <div class="circle-small"></div>
          <div class="circle-tall"></div>
          <div class="circle-medium"></div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
