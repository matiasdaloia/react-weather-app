import React from "react";

function WeatherCard({ resultado }) {
  const { name, main } = resultado;
  if (!name) return null;

  return (
    <div className="card ma2">
      <div className="card-content">
        <p className="title tc">
          La temperatura en {name}, {resultado.sys.country}:
        </p>
        <h2 className="subtitle tc">{main.temp}° C</h2>
        <footer className="card-footer">
          <p className="card-footer-item">
            Copyright @ {new Date().getFullYear()}
          </p>
        </footer>
      </div>
    </div>
  );
}

export default WeatherCard;
