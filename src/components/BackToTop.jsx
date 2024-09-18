// src/components/BackToTop.jsx
import React, { useState, useEffect } from 'react';
import logo from '../assets/moron-logo.png';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Mostrar el botón cuando el usuario se desplaza hacia abajo
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Función para volver al inicio
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 bg-white p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
        style={{ width: '50px', height: '50px' }}
      >
        <img src={logo} alt="Volver arriba" className="w-full h-full object-contain" />
      </button>
    )
  );
};

export default BackToTop;
