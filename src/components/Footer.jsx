// src/components/Footer.jsx
import React from 'react';
import sponsor1 from '../assets/nucete.jpg'; // Reemplaza con la ruta de tus imágenes de auspiciantes
import sponsor2 from '../assets/athletic.jpg';

const Footer = () => {
  return (
    <footer className="bg-red-600 text-white py-4">
      <div className="container mx-auto px-6">
        {/* Sección de Auspiciantes */}
        <div className="flex justify-center items-center space-x-6 mb-4">
          <img src={sponsor1} alt="Auspiciantes" className="h-12" />
          <img src={sponsor2} alt="Auspiciantes" className="h-12" />
        </div>
        
        {/* Información General */}
        <div className="text-center">
          <p className="text-sm">
            © 2024 Club Deportivo Morón. Todos los derechos reservados.
          </p>
          <p className="text-sm">
            Contacto: <a href="mailto:info@cdmoron.com" className="underline">info@cdmoron.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
