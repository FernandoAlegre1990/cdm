// src/components/Hero.jsx
import React, { useState } from 'react';
import logo from '../assets/cdm.png';
import moronAlmiranteImage from '../assets/moron-almirante.jpg';
import futsalImage from '../assets/futsal.jpg';
import moronLogo from '../assets/moron-logo.png';
import previaImage from '../assets/moron-colon.jpg'
import opponentLogo from '../assets/colon-logo.png';
import opponentLogo2 from '../assets/almirante-logo.png';
import camisetas from '../assets/camisetas.jpg'

// Array de slides del carrusel
const slides = [
  {
    title: 'Morón 0 - Alte. Brown 1',
    description: 'Morón no pudo en el clásico, que se fue para los de La Matanza, con gol de Brian Fernández a los 2\' del segundo tiempo.',
    image: moronAlmiranteImage,
  },
  {
    title: 'Morón Campeón',
    description: `𝗠𝗢𝗥𝗢𝗢𝗢𝗢𝗢𝗢𝗢𝗡 𝗖𝗔𝗠𝗣𝗘𝗢𝗢𝗢𝗢𝗢𝗢𝗢𝗢𝗡🏆

    Nos vamos al mundial en Brasil✈️🇧🇷🏆

    ¡Vamos, vamos los pibes! 👏🏻🐓`,
    image: futsalImage,
  },
  {
    title: 'La previa',
    description: 'El último partido entre Morón y Colón, fue derrota por 2 a 0 en el Nuevo Franciso Urbano',
    image: previaImage,
  },
  {
    title: 'Visita nuestra tienda online',
    description: 'Comprar camisetas y otros productos de Morón de la marca Athletic',
    
    image: camisetas,
    link: {
      text: 'Ir a la tienda',
      url: 'https://tienda.athleticargentina.com.ar/'
    }
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const { title, description, image, link } = slides[currentSlide];

  return (
    <main className="bg-white dark:bg-gray-800 relative overflow-hidden">
      <header className="h-24 sm:h-32 flex items-center z-30 w-full bg-red-600">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <img src={logo} alt="Logo" className="h-12 sm:h-16" />
          <p className='font-sen text-white uppercase text-lg lg:flex'>BIENVENIDO A LA PÁGINA DE CLUB DEPORTIVO MORON</p>
          <nav className="font-sen text-white uppercase text-lg lg:flex items-center hidden">
            <a href="/" className="py-2 px-6 flex hover:bg-red-700">Home</a>
            <a href="#equipo" className="py-2 px-6 flex hover:bg-red-700">Equipo</a>
            <a href="#resultados-puntos" className="py-2 px-6 flex hover:bg-red-700">Resultados</a>
            <a href="#asociate" className="py-2 px-6 flex hover:bg-red-700">Asociate</a> {/* Enlace ajustado */}
            <a href="#contacto" className="py-2 px-6 flex hover:bg-red-700">Contacto</a> {/* Enlace ajustado */}
          </nav>
        </div>
      </header>

      {/* Sección de Carrusel */}
      <div className="relative z-20 overflow-hidden h-full flex items-center">
        <div className="container mx-auto px-6 flex relative py-16">
          <div className="flex flex-col lg:flex-row h-full items-center">
            {/* Slide Image */}
            <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-200 p-4 relative">
              {/* Indicadores de Slide - ubicados arriba de la imagen */}
              <div className="flex justify-center items-center absolute top-4 left-1/2 transform -translate-x-1/2 z-30">
                {slides.map((_, index) => (
                  <span
                    key={index}
                    className={`h-1 w-8 mx-1 ${currentSlide === index ? 'bg-red-600' : 'bg-white'} transition-colors duration-300`}
                  ></span>
                ))}
              </div>
              <img src={image} alt="Slide" className="w-full h-auto object-cover rounded-lg shadow-lg" />
            </div>
            {/* Slide Content */}
            <div className="w-full lg:w-1/2 p-12 flex flex-col justify-center bg-red-50">
              <h1 className="text-4xl font-bold text-red-600 mb-4">{title}</h1>
              <p className="text-lg text-gray-800 whitespace-pre-line">{description}</p>
              {link && (
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:underline mt-4"
                >
                  {link.text}
                </a>
              )}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-red-600 text-white p-2 rounded-full shadow-lg z-30"
          >
            &#9664;
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-red-600 text-white p-2 rounded-full shadow-lg z-30"
          >
            &#9654;
          </button>
        </div>
      </div>

      {/* Secciones de Próximo Partido y Último Partido */}
      <div className="container mx-auto px-6 py-8 z-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sección Próximo Partido */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-red-600 mb-2">Próximo Partido</h2>
            <div className="flex items-center mb-2">
              <img src={moronLogo} alt="Moron Logo" className="w-10 h-10 mr-2" />
              <span className="text-lg font-semibold text-gray-800">Morón</span>
              <span className="mx-2 text-gray-600">vs</span>
              <img src={opponentLogo} alt="Opponent Logo" className="w-10 h-10 ml-2" />
              <span className="text-lg font-semibold text-gray-800">Colón</span>
            </div>
            <p className="text-gray-700">Fecha: 30 de Septiembre, 15:30 hrs</p>
            <a href="#" className="text-red-600 hover:underline">Previa del partido</a>
          </div>

          {/* Sección Último Partido */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-bold text-red-600 mb-2">Último Partido</h2>
            <div className="flex items-center mb-2">
              <img src={moronLogo} alt="Moron Logo" className="w-10 h-10 mr-2" />
              <span className="text-lg font-semibold text-gray-800">Morón</span>
              <span className="mx-2 text-gray-600">0 - 1</span>
              <img src={opponentLogo2} alt="Opponent Logo" className="w-10 h-10 ml-2" />
              <span className="text-lg font-semibold text-gray-800">Alte. Brown</span>
            </div>
            <p className="text-gray-700">Resultado: Morón 0 - 1 Alte. Brown</p>
            <a href="#" className="text-red-600 hover:underline">Ver detalles del partido</a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;