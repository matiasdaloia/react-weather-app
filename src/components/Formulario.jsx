import React, { useState } from "react";
import "bulma/css/bulma.css";
import Error from "./Error";

function Formulario({ setConsulta, setBusqueda, busqueda }) {
  const [error, setError] = useState(false);

  const { ciudad, pais } = busqueda;

  const handleChange = (e) => {
    setBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate :
    if (ciudad.trim() === "" || pais.trim() === "") {
      setError(true);
      return;
    }
    setError(false);

    // Pass state to principal component:
    setConsulta(true);
  };

  return (
    <form className="pl4 pt2" onSubmit={handleSubmit}>
      {error ? <Error /> : null}
      <div className="field">
        <div className="label">
          <label htmlFor="ciudad">Ciudad: </label>
        </div>
        <div className="control">
          <input
            type="text"
            id="ciudad"
            name="ciudad"
            className="input is-primary has-text-black"
            placeholder="Ingrese Ciudad"
            style={{ width: "60%" }}
            value={ciudad}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="field ">
        <div className="label">
          <label htmlFor="pais">País:</label>
        </div>
        <div className="control">
          <div className="select is-primary">
            <select name="pais" id="pais" onChange={handleChange} value={pais}>
              <option value="">--Seleccione un País--</option>
              <option value="AR">Argentina</option>
              <option value="BR">Brasil</option>
              <option value="VE">Venezuela</option>
              <option value="CU">Cuba</option>
            </select>
          </div>
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button type="submit" className="button is-primary grow">
            Consultar Clima
          </button>
        </div>
      </div>
    </form>
  );
}

export default Formulario;
