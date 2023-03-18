import logoPequeño from './imagenes/logo192.png'
import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic =() =>{
    setNumClics(numClics +1);
  };

  const reiniciarContador = () =>{
    setNumClics(0);
  };

  return (
    <div className="App">
        <div className='logo-contenedor'>
          <img
          className='logo'
          src={logoPequeño}
          alt='logo' /><h1>ReactApp</h1>
        </div>
      <div className='contenedor-principal'>
        <Contador
        numClics={numClics}
        />
        <Boton 
          texto='clic'
          esBotonDeClic={true}
          manejarClic={manejarClic}/>
        <Boton 
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador}/>
      </div>
    </div>
  );
}

export default App;
