import React, { useState } from 'react'
import { Modal } from './Modal'
import { useContactNavigation } from '../hooks/useContactNavigation'

export const AdditionalServices = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedService, setSelectedService] = useState(null)
  const { scrollToContact } = useContactNavigation()

  const services = [
    {
      id: 'tutoring',
      title: 'Tutorías y Capacitación',
      description: 'Clases especializadas en programación, ciberseguridad y materias de ingeniería en software',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      gradient: 'from-blue-500 to-indigo-600',
      features: [
        'Programación: Python, JavaScript, Java, C++',
        'Ciberseguridad: Ethical Hacking, Pentesting',
        'Bases de datos: SQL, NoSQL, MongoDB',
        'Desarrollo Web: React, Angular, Node.js',
        'Metodologías: Scrum, DevOps, Testing',
        'Clases presenciales y virtuales'
      ]
    },
    {
      id: 'equipment',
      title: 'Venta de Equipos',
      description: 'Servidores, computadoras, firewalls y equipos especializados para empresas',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
      gradient: 'from-green-500 to-teal-600',
      features: [
        'Servidores Dell, HP, Lenovo',
        'Computadoras empresariales y gaming',
        'Firewalls SonicWall, Fortinet, Cisco',
        'Switches y routers de red',
        'Sistemas de almacenamiento',
        'Garantía y soporte técnico incluido'
      ]
    },
    {
      id: 'security',
      title: 'Seguridad Perimetral',
      description: 'Segmentación de red, hardening de sistemas y protección avanzada',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      gradient: 'from-red-500 to-pink-600',
      features: [
        'Segmentación de red VLAN',
        'Hardening de sistemas Windows/Linux',
        'Configuración de firewalls',
        'Monitoreo de seguridad 24/7',
        'Auditorías de vulnerabilidades',
        'Políticas de seguridad personalizadas'
      ]
    }
  ]

  const handleOpenModal = (service) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  const handleContactRequest = () => {
    setIsModalOpen(false)
    if (selectedService) {
      scrollToContact(`${selectedService.title} - ${selectedService.description}`)
    }
  }

  return (
    <>
      <div className="bg-gradient-to-br from-gray-50 to-blue-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Servicios Adicionales
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Ampliamos nuestro portafolio con servicios especializados para cubrir todas tus necesidades tecnológicas
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.id} className="group h-full">
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 h-full hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105 flex flex-col">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    {service.icon}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features Preview */}
                    <div className="mb-6 flex-grow">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Incluye:</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-600">
                            <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="leading-tight">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Button - Fixed at bottom */}
                    <div className="mt-auto">
                      <button
                        onClick={() => handleOpenModal(service)}
                        className={`w-full bg-gradient-to-r ${service.gradient} text-white py-3 px-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
                      >
                        Ver más detalles
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedService && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={selectedService.title}
          message={`${selectedService.description}. ¿Te interesa conocer más sobre este servicio? Nuestro equipo especializado te brindará información detallada y una cotización personalizada.`}
          onConfirm={handleContactRequest}
          confirmText="Solicitar información"
          cancelText="Cerrar"
        />
      )}
    </>
  )
}