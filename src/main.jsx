// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Asociate from './pages/Asociate'; // Importar la nueva página
import './index.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="/asociate" element={<Asociate />} /> {/* Nueva ruta para Asociate */}
      {/* No es necesario agregar una ruta separada para Equipo */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
