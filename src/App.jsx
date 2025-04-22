import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Saludo from './components/saludo'; // Importa el componente

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>Vite + React</h1>

      <div>
        {/* Usa el componente personalizado de saludo */}
        <Saludo nombre="Oscar" />
      </div>

      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          Aumentar: {count}
        </button>

        <button onClick={() => setCount(count - 1)}>
          Disminuir: {count}
        </button>

        <p>
          Edita <code>src/App.jsx</code> y guarda para probar HMR
        </p>
      </div>

      <p className="read-the-docs">
        Haz clic en los logos de Vite y React para aprender más
      </p>
    </>
  );
}

export default App;
