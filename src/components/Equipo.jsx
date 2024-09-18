// src/components/Equipo.jsx
import React from 'react';
import arqueroImage from '../assets/arqueros/arquero1.jpg'
import arqueroImage2 from '../assets/arqueros/arquero2.jpg'
import arcieroImage from '../assets/arciero.jpg'
import henryImage from '../assets/nicolashenry.jpg'
import barrientosImage from '../assets/barrientos.jpg'
import gastonImage  from '../assets/gastongonzalez.jpg'
import gomezImage from '../assets/gomez.jpg'
import bracamonteImage from '../assets/bracamonte.jpg'
import castroImage from '../assets/matiascastro.jpg'
import berterameImage from '../assets/berterame.jpg'

const jugadores = {
  arqueros: [
    { nombre: 'Juan Rojas', edad: 25, altura: '190cm', nacionalidad: 'Argentina', nacimiento: '09-08-1999', image: arqueroImage},
    { nombre: 'Agustín Rufinetti', edad: 24, altura: '185cm', nacionalidad: 'Argentina', nacimiento: '27-01-2000', image: arqueroImage2 },

  ],
  defensores: [
    { nombre: 'Rodrigo Arciero', edad: 31, altura: '179cm', nacionalidad: 'Ushuaia, Argentina', nacimiento: '12-03-1993', image: arcieroImage },
    { nombre: 'Nicolás Henry', edad: 26, nacionalidad: 'Argentina', nacimiento: '28-08-1998', image: henryImage },
    { nombre: 'Agustín Gómez', edad: 28, nacionalidad: 'Argentina', nacimiento: '28-08-1996', image: gomezImage },
    { nombre: 'Mariano Bracamonte', edad: 25, nacionalidad: 'Argentina', nacimiento: '24-04-1999', image: bracamonteImage },
    // Agrega los demás defensores aquí...
  ],
  mediocampistas: [
    { nombre: 'Fernando Barrientos', edad: 32, altura: '176cm', nacionalidad: 'Lanús, Argentina', nacimiento: '17-11-1991', image: barrientosImage },
    { nombre: 'Gaston González', edad: 36, altura: '179cm', nacionalidad: 'Argentina', nacimiento: '23-02-1988', image: gastonImage },
    // Agrega los demás mediocampistas aquí...
  ],
  delanteros: [
    { nombre: 'Matías Castro', edad: 32, altura: '182cm', nacionalidad: 'Neuquén, Argentina', nacimiento: '18-12-1991', image: castroImage },
    { nombre: 'Gonzalo Berterame', edad: 28, altura: '166cm', nacionalidad: 'Villa María, Argentina', nacimiento: '11-07-1996', image: berterameImage },
    // Agrega los demás delanteros aquí...
  ],
  entrenador: [
    { nombre: 'César Monasterio', edad: 53, nacionalidad: 'Argentina', nacimiento: '10-07-1971' },
  ],
};

const Equipo = () => {
  return (
    <section className="py-10 bg-gray-100" id="equipo">
      <h2 className="text-3xl font-bold text-center text-red-600 mb-8">Equipo</h2>
      {Object.keys(jugadores).map((categoria) => (
        <div key={categoria} className="mb-10">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 capitalize">{categoria}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {jugadores[categoria].map((jugador, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                {/* Mostrar la imagen del jugador */}
                {jugador.image ? (
                  <img src={jugador.image} alt={jugador.nombre} className="h-32 w-full object-cover bg-gray-200 rounded-lg mb-4" style={{ objectFit: 'cover', height: '200px', width: '100%' }} />
                  
                ) : (
                  <div className="h-32 w-full bg-gray-200 rounded-lg mb-4 flex items-center justify-center text-gray-500">
                    Sin Imagen
                  </div>
                )}
                <h4 className="text-xl font-bold text-gray-700">{jugador.nombre}</h4>
                <p className="text-gray-600">Edad: {jugador.edad}</p>
                <p className="text-gray-600">Altura: {jugador.altura || 'N/A'}</p>
                <p className="text-gray-600">Nacionalidad: {jugador.nacionalidad}</p>
                <p className="text-gray-600">Nacimiento: {jugador.nacimiento}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Equipo;
