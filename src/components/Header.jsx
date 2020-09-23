import React from "react";
import "bulma/css/bulma.css";

function Header({ titulo }) {
  return (
    <nav className="navbar is-warning 5">
      <div className="navbar-brand ">
        <a className="navbar-item" href="!#">
          <img
            className="pl3"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
            alt="react_weather_app"
          />
          {titulo}
        </a>
      </div>
    </nav>
  );
}

export default Header;
