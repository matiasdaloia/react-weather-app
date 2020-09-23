import React, { Fragment, useState, useEffect } from "react";
import "bulma/css/bulma.css";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import WeatherCard from "./components/WeatherCard";
import { apiKey } from "./apiKey";

function App() {
  // state de la busqueda :
  const [busqueda, setBusqueda] = useState({
    ciudad: "",
    pais: "",
  });

  const { ciudad, pais } = busqueda;

  // State que pasa al formulario para que cambie a true cuando submitimos el form
  const [consulta, setConsulta] = useState(false);

  // State del resultado

  const [resultado, setResultado] = useState({});

  // Uso useEffect para llamar a la api una vez que submitimos el form (consulta=true)
  useEffect(() => {
    const consultarAPI = async () => {
      if (consulta) {
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}&units=metric`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setResultado(resultado);
      }
    };
    consultarAPI();
  }, [consulta, ciudad, pais]);

  return (
    <Fragment>
      <Header titulo="React Weather App" />
      <div className="columns near-black bg-washed-yellow">
        <div className="column">
          <Formulario
            setConsulta={setConsulta}
            busqueda={busqueda}
            setBusqueda={setBusqueda}
          />
        </div>
        <div className="column">
          {consulta ? (
            <WeatherCard ciudad={ciudad} pais={pais} resultado={resultado} />
          ) : null}
        </div>
      </div>
    </Fragment>
  );
}

export default App;
