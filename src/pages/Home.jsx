// src/pages/Home.jsx
import React from 'react';
import Hero from '../components/Hero';
import ResultadosYPuntos from '../components/ResultadosYPuntos';
import Asociate from './Asociate';
import Contacto from '../components/Contacto';
import Equipo from '../components/Equipo';

const Home = () => {
  return (
    <div>
      <Hero />
      <section id="resultados-puntos">
        <ResultadosYPuntos />
      </section>
      <section id="equipo">
        <Equipo />
      </section>
      <section id="asociate">
        <Asociate />
      </section>
      <section id="contacto">
        <Contacto />
      </section>
    </div>
  );
};

export default Home;
