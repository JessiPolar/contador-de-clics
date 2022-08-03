import './App.css';
import abaco from './imagenes/abaco_1.png'
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className='App'>
      <div className='logo-contenedor'>
        <img
          className='logo'
          src={abaco}
          alt='' />
      </div>
      <div className='contenedor-contador'>
        <Contador numClics={numClics} />
        <Boton 
          texto='Clic' 
          esBotonDeClic={true} 
          manejarClic={manejarClic} />
        <Boton 
          texto='Reiniciar' 
          esBotonDeClic={false} 
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
