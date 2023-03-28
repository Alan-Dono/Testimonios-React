import React from "react";
import '../hojas-de-estilo/Testimonio.css';

export function Testimonio(props){ //exportacion nombrada
  return(
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio'
      src={require(`../imagenes/testimonio-${props.imagen}.png`)}
      alt={props.nombre}
      />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
          <strong>{props.nombre}</strong>{props.nombre} en <strong>{props.pais}</strong>
        </p>
        <p className='cargo-testimonio'>{props.cargo} en {props.empresa}</p>
        <p className='texto-testimonio'>{props.testimonio}</p>
      </div>
    </div>
  );
}


//export default Testimonio; Se usa sin la exportacion nombrada