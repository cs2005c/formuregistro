import React from "react";
let mensajefinal = "";

function Alert(mensaje) {
  if (mensaje.nombre === 1) {
    mensajefinal = "Se deben Completar Todos los Campos";
  }
  if (mensaje.nombre === 2) {
    mensajefinal = "Las Claves Son Diferentes";
  }
  if (mensaje.nombre === 3) {
    mensajefinal = "El Registro Fue Exitoso";
  }
  if (mensaje.nombre === 0) {
    mensajefinal = "";
  }
  return (
    <>
      <p>{mensajefinal}</p>
    </>
  );
}

export default Alert;
