// src/components/ResultadosYPuntos.jsx
import React from 'react';

// Datos de resultados
const resultados = [
  { dia: '03/02', numero: 1, localVisitante: 'L', vsEquipo: 'Brown (A)', resultado: '3 - 0' },
  { dia: '10/02', numero: 2, localVisitante: 'V', vsEquipo: 'Almagro', resultado: '1 - 2' },
  { dia: '17/02', numero: 3, localVisitante: 'L', vsEquipo: 'Def. de Belgrano', resultado: '0 - 4' },
  { dia: '25/02', numero: 4, localVisitante: 'V', vsEquipo: 'Chaco For Ever', resultado: '2 - 0' },
  { dia: '03/03', numero: 5, localVisitante: 'L', vsEquipo: 'San Telmo', resultado: '1 - 2' },
  { dia: '08/03', numero: 6, localVisitante: 'V', vsEquipo: 'Atl Rafaela', resultado: '2 - 1' },
  { dia: '17/03', numero: 7, localVisitante: 'L', vsEquipo: 'Dep. Madryn', resultado: '0 - 0' },
  { dia: '23/03', numero: 8, localVisitante: 'V', vsEquipo: 'Def. Unidos', resultado: '0 - 2' },
  { dia: '31/03', numero: 9, localVisitante: 'L', vsEquipo: 'Atlanta', resultado: '3 - 0' },
  { dia: '06/04', numero: 10, localVisitante: 'V', vsEquipo: 'Alte Brown', resultado: '1 - 1' },
  { dia: '13/04', numero: 11, localVisitante: 'L', vsEquipo: 'Colon', resultado: '0 - 2' },
  { dia: '21/04', numero: 12, localVisitante: 'V', vsEquipo: 'Estudiantes (RC)', resultado: '0 - 2' },
  { dia: '28/04', numero: 13, localVisitante: 'L', vsEquipo: 'Aldosivi', resultado: '2 - 1' },
  { dia: '04/05', numero: 14, localVisitante: 'V', vsEquipo: 'Mitre (SdE)', resultado: '0 - 0' },
  { dia: '11/05', numero: 15, localVisitante: 'L', vsEquipo: 'Gimnasia (S)', resultado: '0 - 0' },
  { dia: '19/05', numero: 16, localVisitante: 'V', vsEquipo: 'Gimnasia (M)', resultado: '1 - 2' },
  { dia: '26/05', numero: 17, localVisitante: 'L', vsEquipo: 'Nueva Chicago', resultado: '1 - 0' },
  { dia: '02/06', numero: 18, localVisitante: 'L', vsEquipo: 'San Miguel', resultado: '0 - 1' },
  { dia: '08/06', numero: 19, localVisitante: 'V', vsEquipo: 'Temperley', resultado: '0 - 3' },
  { dia: '22/06', numero: 20, localVisitante: 'V', vsEquipo: 'Brown (A)', resultado: '0 - 0' },
  { dia: '30/06', numero: 21, localVisitante: 'L', vsEquipo: 'Almagro', resultado: '0 - 0' },
  { dia: '07/07', numero: 22, localVisitante: 'V', vsEquipo: 'Def. de Belgrano', resultado: '0 - 0' },
  { dia: '13/07', numero: 23, localVisitante: 'L', vsEquipo: 'Chaco For Ever', resultado: '1 - 0' },
  { dia: '21/07', numero: 24, localVisitante: 'V', vsEquipo: 'San Telmo', resultado: '1 - 1' },
  { dia: '27/07', numero: 25, localVisitante: 'L', vsEquipo: 'Atl Rafaela', resultado: '1 - 1' },
  { dia: '03/08', numero: 26, localVisitante: 'V', vsEquipo: 'Dep. Madryn', resultado: '0 - 0' },
  { dia: '10/08', numero: 27, localVisitante: 'L', vsEquipo: 'Def. Unidos', resultado: '1 - 1' },
  { dia: '19/08', numero: 28, localVisitante: 'V', vsEquipo: 'Atlanta', resultado: '0 - 1' },
  { dia: '25/08', numero: 29, localVisitante: 'L', vsEquipo: 'Alte Brown', resultado: '0 - 1' },
  { dia: '01/09', numero: 30, localVisitante: 'V', vsEquipo: 'Colon', resultado: '-' },
  { dia: 'A Conf.', numero: 31, localVisitante: 'L', vsEquipo: 'Estudiantes (RC)', resultado: '-' },
  { dia: 'A Conf.', numero: 32, localVisitante: 'V', vsEquipo: 'Aldosivi', resultado: '-' },
  { dia: 'A Conf.', numero: 33, localVisitante: 'L', vsEquipo: 'Mitre (SdE)', resultado: '-' },
  { dia: 'A Conf.', numero: 34, localVisitante: 'V', vsEquipo: 'Gimnasia (S)', resultado: '-' },
  { dia: 'A Conf.', numero: 35, localVisitante: 'L', vsEquipo: 'Gimnasia (M)', resultado: '-' },
  { dia: 'A Conf.', numero: 36, localVisitante: 'V', vsEquipo: 'Nueva Chicago', resultado: '-' },
  { dia: 'A Conf.', numero: 37, localVisitante: 'V', vsEquipo: 'San Miguel', resultado: '-' },
  { dia: 'A Conf.', numero: 38, localVisitante: 'L', vsEquipo: 'Temperley', resultado: '-' },
];

// Datos de la tabla de puntos
const tablaPuntos = [
  { puesto: 1, equipo: 'Nueva Chicago', pts: 51, pj: 29, pg: 15, pe: 6, pp: 8, gf: 30, gc: 18, dif: '+12' },
  { puesto: 2, equipo: 'Gimnasia (M)', pts: 50, pj: 29, pg: 14, pe: 8, pp: 7, gf: 36, gc: 27, dif: '+9' },
  { puesto: 3, equipo: 'Aldosivi', pts: 49, pj: 29, pg: 13, pe: 10, pp: 6, gf: 30, gc: 19, dif: '+11' },
  { puesto: 4, equipo: 'San Telmo*', pts: 47, pj: 29, pg: 13, pe: 11, pp: 5, gf: 37, gc: 17, dif: '+20' },
  { puesto: 5, equipo: 'Gimnasia (S)', pts: 47, pj: 29, pg: 11, pe: 14, pp: 4, gf: 19, gc: 13, dif: '+6' },
  { puesto: 6, equipo: 'Colon', pts: 46, pj: 29, pg: 13, pe: 7, pp: 9, gf: 34, gc: 21, dif: '+13' },
  { puesto: 7, equipo: 'Def. de Belgrano', pts: 45, pj: 29, pg: 12, pe: 9, pp: 8, gf: 32, gc: 21, dif: '+11' },
  { puesto: 8, equipo: 'Dep. Madryn', pts: 45, pj: 29, pg: 12, pe: 9, pp: 8, gf: 22, gc: 17, dif: '+5' },
  { puesto: 9, equipo: 'Mitre (SdE)', pts: 40, pj: 29, pg: 9, pe: 13, pp: 7, gf: 17, gc: 14, dif: '+3' },
  { puesto: 10, equipo: 'Estudiantes (RC)', pts: 40, pj: 29, pg: 10, pe: 10, pp: 9, gf: 24, gc: 24, dif: '0' },
  { puesto: 11, equipo: 'Temperley', pts: 39, pj: 29, pg: 9, pe: 12, pp: 8, gf: 26, gc: 23, dif: '+3' },
  { puesto: 12, equipo: 'Atlanta', pts: 39, pj: 29, pg: 10, pe: 9, pp: 10, gf: 24, gc: 28, dif: '-4' },
  { puesto: 13, equipo: 'Almagro', pts: 33, pj: 29, pg: 7, pe: 12, pp: 10, gf: 21, gc: 32, dif: '-11' },
  { puesto: 14, equipo: 'Dep. Moron', pts: 32, pj: 29, pg: 7, pe: 11, pp: 11, gf: 21, gc: 28, dif: '-7' },
  { puesto: 15, equipo: 'Def. Unidos', pts: 30, pj: 29, pg: 7, pe: 9, pp: 13, gf: 25, gc: 33, dif: '-8' },
  { puesto: 16, equipo: 'Alte Brown', pts: 28, pj: 29, pg: 6, pe: 10, pp: 13, gf: 16, gc: 25, dif: '-9' },
  { puesto: 17, equipo: 'Chaco For Ever', pts: 27, pj: 29, pg: 6, pe: 9, pp: 14, gf: 20, gc: 23, dif: '-3' },
  { puesto: 18, equipo: 'Atl Rafaela', pts: 19, pj: 29, pg: 4, pe: 7, pp: 18, gf: 18, gc: 38, dif: '-20' },
  { puesto: 19, equipo: 'Brown (A)', pts: 19, pj: 29, pg: 3, pe: 10, pp: 16, gf: 13, gc: 42, dif: '-29' },
];

// Componente ResultadosYPuntos
const ResultadosYPuntos = () => {
    return (
      <section id="resultados-puntos" className="py-6 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Resultados y Puntos</h2>
          <div className="flex flex-col md:flex-row gap-6">
            
            {/* Tabla de Resultados */}
            <div className="flex-1 overflow-x-auto">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Resultados</h3>
              <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm text-sm">
                <thead>
                  <tr className="bg-red-600 text-white">
                    <th className="py-1 px-2 border-b">Dia</th>
                    <th className="py-1 px-2 border-b">#F</th>
                    <th className="py-1 px-2 border-b">L/V</th>
                    <th className="py-1 px-2 border-b">vsEquipo</th>
                    <th className="py-1 px-2 border-b">Res</th>
                    <th className="py-1 px-2 border-b">Ficha</th>
                  </tr>
                </thead>
                <tbody>
                  {resultados.map((resultado, index) => (
                    <tr key={index} className={`odd:bg-gray-50 even:bg-gray-100 hover:bg-gray-200`}>
                      <td className="py-1 px-2 border-b text-center">{resultado.dia}</td>
                      <td className="py-1 px-2 border-b text-center">{resultado.numero}</td>
                      <td className="py-1 px-2 border-b text-center">{resultado.localVisitante}</td>
                      <td className="py-1 px-2 border-b text-center">{resultado.vsEquipo}</td>
                      <td className="py-1 px-2 border-b text-center">{resultado.resultado}</td>
                      <td className="py-1 px-2 border-b text-center">{resultado.ficha}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
  
            {/* Tabla de Puntos */}
            <div className="flex-1 overflow-x-auto">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Tabla de Puntos</h3>
              <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-sm text-sm">
                <thead>
                  <tr className="bg-red-600 text-white">
                    <th className="py-1 px-2 border-b">#</th>
                    <th className="py-1 px-2 border-b">Equipo</th>
                    <th className="py-1 px-2 border-b">Pts</th>
                    <th className="py-1 px-2 border-b">PJ</th>
                    <th className="py-1 px-2 border-b">PG</th>
                    <th className="py-1 px-2 border-b">PE</th>
                    <th className="py-1 px-2 border-b">PP</th>
                    <th className="py-1 px-2 border-b">GF</th>
                    <th className="py-1 px-2 border-b">GC</th>
                    <th className="py-1 px-2 border-b">DIF</th>
                  </tr>
                </thead>
                <tbody>
                  {tablaPuntos.map((equipo, index) => (
                    <tr key={index} className={`odd:bg-gray-50 even:bg-gray-100 hover:bg-gray-200`}>
                      <td className="py-1 px-2 border-b text-center">{equipo.puesto}</td>
                      <td className="py-1 px-2 border-b text-center">{equipo.equipo}</td>
                      <td className="py-1 px-2 border-b text-center">{equipo.pts}</td>
                      <td className="py-1 px-2 border-b text-center">{equipo.pj}</td>
                      <td className="py-1 px-2 border-b text-center">{equipo.pg}</td>
                      <td className="py-1 px-2 border-b text-center">{equipo.pe}</td>
                      <td className="py-1 px-2 border-b text-center">{equipo.pp}</td>
                      <td className="py-1 px-2 border-b text-center">{equipo.gf}</td>
                      <td className="py-1 px-2 border-b text-center">{equipo.gc}</td>
                      <td className="py-1 px-2 border-b text-center">{equipo.dif}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
          </div>
        </div>
      </section>
    );
  };
  
  export default ResultadosYPuntos;
