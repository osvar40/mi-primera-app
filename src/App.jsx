import { useState } from 'react'
import sena from './assets/sena.png'
import viteLogo from '/vite.svg'
import './App.css'
import Saludo from './components/saludo'; 

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Fondo con un gradiente suave */}
      <div className="bg-gradient-to-r from-teal-200 via-blue-100 to-indigo-200 min-h-screen flex flex-col justify-center items-center py-12 px-6">

        {/* Contenedor del logo Sena */}
        <div className="flex justify-center items-center h-64 mb-8">
          <a href="https://sena.png" target="_blank">
            <img src={sena} className="w-64" alt="Logo Sena" />
          </a>
        </div>

        {/* Título de la app */}
        <h1 className="text-5xl font-semibold text-center text-teal-700 mb-6">Mi Primer App</h1>

        {/* Componente Saludo centrado */}
        <div className="flex justify-center items-center mb-6">
          <Saludo nombre="Oscar" />
        </div>

        {/* Contenedor del contador con más espacio y bordes redondeados */}
        <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md">
          <p className="text-2xl text-gray-800 mb-6 font-medium">El contador está en {count}</p>

          {/* Botones de incrementar y decrementar */}
          <div className="space-x-4 mb-6">
            <button 
              onClick={() => setCount((count) => count + 1)} 
              className="bg-teal-500 text-white py-3 px-6 rounded-xl shadow-lg hover:bg-teal-600 hover:text-gray-100 transition duration-300"
            >
              Incrementar
            </button>
            
            <button 
              onClick={() => setCount((count) => count - 1)} 
              className="bg-indigo-500 text-white py-3 px-6 rounded-xl shadow-lg hover:bg-indigo-600 hover:text-gray-100 transition duration-300"
            >
              Decrementar
            </button>
          </div>

          {/* Información sobre el archivo */}
          <p className="text-sm text-gray-600 mt-4">
            Edita <code className="font-mono text-gray-700">src/App.jsx</code> y guarda para probar HMR
          </p>
        </div>

        {/* Pie de página */}
        <p className="text-center text-gray-500 mt-8">
          Haz clic en los logos de Vite y React para aprender más
        </p>

      </div>
    </>
  );
}

export default App;
