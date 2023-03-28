import logo from './logo.svg';
import './App.css';
//import Testimonio from './componentes/Testimonio.js';
import { Testimonio } from './componentes/Testimonio' //importacion nombrada
function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Estos es lo que dicen nuestros usuarios</h1>
        <Testimonio />
      </div>
    </div>
  );
}

export default App;
