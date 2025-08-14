import React from 'react'
import { ContactanosForm } from '../components/ContactanosForm'

export const Contacto = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="relative overflow-hidden animated-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center relative z-10">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6">
              Contacto
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed">
              Estamos aquí para ayudarte. Ponte en contacto con nosotros y descubre cómo podemos impulsar tu negocio
            </p>
          </div>
        </div>
      </div>

      {/* Información de contacto rápida */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          
          {/* Teléfono */}
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-[#10b981] to-[#10a0b9] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Llámanos</h3>
            <p className="text-lg text-gray-600 mb-2">+57 (300) 123-4567</p>
            <p className="text-gray-500">Lunes a Viernes: 8:00 AM - 6:00 PM</p>
          </div>

          {/* Email */}
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-[#10b981] to-[#10a0b9] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Escríbenos</h3>
            <p className="text-lg text-gray-600 mb-2">info@wefsolution.com</p>
            <p className="text-gray-500">Respuesta en menos de 24 horas</p>
          </div>

          {/* Ubicación */}
          <div className="text-center group">
            <div className="w-20 h-20 bg-gradient-to-r from-[#10b981] to-[#10a0b9] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Visítanos</h3>
            <p className="text-lg text-gray-600 mb-2">Quito, Ecuador</p>
            <p className="text-gray-500">Cita previa requerida</p>
          </div>

        </div>
      </div>

      <ContactanosForm />
    </div>
  )
}