// src/components/PartidoInfo.jsx
import React from 'react';
import moronLogo from '../assets/moron-logo.png'; // Importa el escudo de Morón
import opponentLogo from '../assets/colon-logo.png'; // Importa el escudo del próximo rival
import opponentLogo2 from '../assets/almirante-logo.png'; // Importa el escudo del último rival

const PartidoInfo = () => {
  return (
    <div className="container mx-auto px-6 py-8">
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
  );
};

export default PartidoInfo;
