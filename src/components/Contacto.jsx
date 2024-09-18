// src/components/Contacto.jsx
import React from 'react';

const Contacto = () => {
  return (
    <section id="contacto" className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-red-600 mb-6">Contacto</h2>
        <div className="flex flex-col md:flex-row">
          {/* Formulario de Contacto */}
          <div className="md:w-1/2 md:pr-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Envíanos un Mensaje</h3>
            <form action="mailto:example@example.com" method="post" encType="text/plain">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Nombre:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full border-gray-300 rounded-lg py-2 px-3"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Correo Electrónico:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border-gray-300 rounded-lg py-2 px-3"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700">Mensaje:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full border-gray-300 rounded-lg py-2 px-3"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Enviar
              </button>
            </form>
          </div>
          {/* Información de Contacto */}
          <div className="md:w-1/2 md:pl-6 mt-8 md:mt-0">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Información de Contacto</h3>
            <p className="text-gray-700 mb-2">Teléfono: <a href="tel:+1234567890" className="text-red-600 hover:underline">+1 (234) 567-890</a></p>
            <p className="text-gray-700 mb-2">Correo Electrónico: <a href="mailto:contacto@ejemplo.com" className="text-red-600 hover:underline">contacto@ejemplo.com</a></p>
            <p className="text-gray-700">Dirección: Av. Ejemplo 123, Ciudad, País</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
