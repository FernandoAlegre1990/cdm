// src/App.jsx
import React from 'react';
import { Outlet } from 'react-router-dom'; // Importa Outlet
import BackToTop from './components/BackToTop'; // Importa el botón flotante

import Footer  from './components/Footer'

const App = () => {
  return (
    <div>
      {/* Este puede ser tu layout general */}
      <Outlet /> {/* Renderiza las rutas hijas aquí */}
      <BackToTop />

      <Footer />
    </div>
  );
};

export default App;
