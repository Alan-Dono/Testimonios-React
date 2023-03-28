import React from "react";
import '../hojas-de-estilo/Testimonio.css';

export function Testimonio(){ //exportacion nombrada
  return(
    <div className='contenedor-testimonio'>
      <img className='imagen-testimonio'
      src={require('../imagenes/testimonio-emma.png')}
      alt='Foto de emma'
      />
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>Sarah Johnson, Estados Unidos</p>
        <p className='cargo-testimonio'>Chief Information Security Officer</p>
        <p className='texto-testimonio'>Cillum nulla eu proident laboris. Sunt aliquip incididunt excepteur est voluptate et ullamco ea eiusmod veniam. Ea pariatur magna ut reprehenderit ex officia cillum fugiat officia consectetur veniam.</p>
      </div>
    </div>
  );
}


//export default Testimonio; Se usa sin la exportacion nombrada