// src/components/Asociate.jsx
import React from 'react';

const Asociate = () => {
  return (
    <section id="asociate" className="bg-white dark:bg-gray-800 py-16">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-6">¡Asociate al Club!</h1>
        <p className="text-lg text-gray-800 mb-8">
          Sé parte de nuestra gran familia y apoyá al Club Deportivo Morón en cada paso del camino.
          Ser socio no solo te acerca a tu pasión, sino que también ayuda a crecer al club que amás.
          Disfrutá de beneficios exclusivos, prioridad en la compra de entradas y mucho más.
        </p>
        <p className="text-lg text-gray-800 mb-8">
          ¡Unite y hacé la diferencia! Tu compromiso y amor por el Gallo son fundamentales.
          Juntos podemos lograr grandes cosas. No te quedes afuera de esta gran hinchada,
          asociate hoy mismo y sumate a este sentimiento único.
        </p>
        <a
          href="https://moron.sedelab.com"
          className="inline-block bg-red-600 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-red-700 transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          Asociate Ahora
        </a>
      </div>
    </section>
  );
};

export default Asociate;
