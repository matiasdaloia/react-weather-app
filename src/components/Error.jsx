import React from "react";

function Error() {
  return (
    <div className="notification is-danger is-light">
      <button className="delete"></button>
      Por favor ingrese ambos campos para realizar la busqueda.
    </div>
  );
}

export default Error;
