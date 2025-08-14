import React from 'react'

export const ServiceModal = ({ isOpen, onClose, service, onContact }) => {
  if (!isOpen || !service) return null

  return (
    <div className="fixed inset-0 backdrop-blur-md bg-opacity-30 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className={`bg-gradient-to-r ${service.gradient} rounded-t-2xl p-6 text-white relative`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="flex items-center mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
              {service.icon}
            </div>
            <h2 className="text-3xl font-bold">{service.title}</h2>
          </div>
          <p className="text-lg opacity-90">{service.description}</p>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">¿Qué incluye nuestro servicio?</h3>
          
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          {/* Service specific details */}
          {service.id === 'tutoring' && (
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h4 className="font-semibold text-blue-900 mb-2">Modalidades disponibles:</h4>
              <p className="text-blue-800 text-sm">
                • Clases individuales personalizadas<br/>
                • Grupos pequeños (máximo 5 estudiantes)<br/>
                • Horarios flexibles (mañana, tarde, noche)<br/>
                • Certificados de participación
              </p>
            </div>
          )}

          {service.id === 'equipment' && (
            <div className="bg-green-50 p-4 rounded-lg mb-6">
              <h4 className="font-semibold text-green-900 mb-2">Beneficios adicionales:</h4>
              <p className="text-green-800 text-sm">
                • Instalación y configuración incluida<br/>
                • Mantenimiento preventivo gratuito (6 meses)<br/>
                • Financiamiento disponible<br/>
                • Intercambio de equipos usados
              </p>
            </div>
          )}

          {service.id === 'security' && (
            <div className="bg-red-50 p-4 rounded-lg mb-6">
              <h4 className="font-semibold text-red-900 mb-2">Proceso de implementación:</h4>
              <p className="text-red-800 text-sm">
                • Evaluación inicial gratuita<br/>
                • Diseño de arquitectura de seguridad<br/>
                • Implementación por fases<br/>
                • Capacitación del personal interno
              </p>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={onClose}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
            >
              Cerrar
            </button>
            <button
              onClick={() => {
                onClose()
                onContact()
              }}
              className={`px-6 py-3 bg-gradient-to-r ${service.gradient} text-white rounded-lg hover:shadow-lg transition-all duration-300 font-medium flex-1`}
            >
              Solicitar cotización
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}