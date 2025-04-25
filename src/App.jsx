import { useState } from 'react'
import sena from './assets/sena.png'
import viteLogo from '/vite.svg'
import './App.css'
import Saludo from './components/saludo'; // Importa el componente

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>

        <a href="https://sena.png" target="_blank">
          <img src={sena} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>mi primer a App</h1>

      <div>
    <Saludo nombre="oscar" />
  </div>

      <div className="card">  
        <p>El contador esta en {count} </p>
        <button onClick={() => setCount((count) => count + 1)}>incrementar</button>
        <button onClick={() => setCount((count) => count - 1)}>decrementar</button>
       
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

    </>
  );
}

export default App;
