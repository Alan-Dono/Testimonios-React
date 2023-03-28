import logo from './logo.svg';
import './App.css';
//import Testimonio from './componentes/Testimonio.js';
import { Testimonio } from './componentes/Testimonio' //importacion nombrada
function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Estos es lo que dicen nuestros usuarios</h1>
        <Testimonio
          nombre='Shaw Wang'
          pais='Singapur'
          imagen='shawn'
          cargo='Ingeniero de software'
          empresa='Amazon'
          testimonio='Culpa proident minim in minim do consectetur consectetur duis cupidatat pariatur ullamco laboris. Ullamco id duis sunt proident eu officia deserunt proident sint quis laboris aute duis eu. Aliquip cupidatat incididunt dolor ullamco ullamco sit laborum cillum tempor irure cillum enim ut. Sunt nostrud ex sint est elit nisi. Dolor veniam esse esse est proident minim commodo enim minim nisi mollit labore occaecat. Aliquip elit pariatur dolore eiusmod mollit culpa fugiat aute do laboris. Irure ipsum nulla nisi nostrud eiusmod reprehenderit.'/>
        <Testimonio 
        nombre='Emma Bostian'
        pais='Suecia'
        imagen='emma'
        cargo='Ingeniera de software'
        empresa='Sportify'
        testimonio='Duis elit aliquip minim culpa amet eiusmod fugiat occaecat voluptate est. Voluptate occaecat dolor officia sunt. Aliqua nulla officia elit mollit officia ullamco pariatur do. Quis proident reprehenderit excepteur sint excepteur amet nisi aute elit laborum fugiat.'/>
        <Testimonio
          nombre='Sarah Chima'
          pais='Nigeria'
          imagen='sarah'
          cargo='Ingeniera de software'
          empresa='ChatDesk'
          testimonio='Duis elit aliquip minim culpa amet eiusmod fugiat occaecat voluptate est. Voluptate occaecat dolor officia sunt. Aliqua nulla officia elit mollit officia ullamco pariatur do. Quis proident reprehenderit excepteur sint excepteur amet nisi aute elit laborum fugiat.' />
      </div>
    </div>
  );
}

export default App;
