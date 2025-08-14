import React, { useState } from 'react'
import { ServiceModal } from './ServiceModal'
import { useContactNavigation } from '../hooks/useContactNavigation'

export const PerimetralSecurity = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { scrollToContact } = useContactNavigation()

  const securityService = {
    id: 'perimetral-security',
    title: 'Seguridad Perimetral Avanzada',
    description: 'Protección integral para tu infraestructura tecnológica',
    gradient: 'from-teal-500 to-cyan-600',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    features: [
      'Firewall de nueva generación (NGFW)',
      'Sistema de detección de intrusiones (IDS/IPS)',
      'Segmentación de red por VLAN',
      'Monitoreo 24/7 con SOC',
      'Hardening de servidores y estaciones',
      'Auditorías de vulnerabilidades',
      'Backup y recuperación de datos',
      'Políticas de seguridad personalizadas',
      'Capacitación del personal',
      'Certificaciones ISO 27001'
    ]
  }

  const handleContactRequest = () => {
    scrollToContact(`${securityService.title} - Solicitud de cotización para implementación de seguridad perimetral empresarial`)
  }

  return (
    <>
      <div>
        {/* Perimetral Security Section */}
        <div className="bg-gradient-to-r from-[#10b981] to-[#10a0b9] py-36">
          <div className="max-w-[81%] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-[10%] items-center">
              
              {/* Left Side - 30% */}
              <div className="lg:w-[30%] w-full">
                <h1 className="text-6xl md:text-7xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                  Seguridad Perimetral
                </h1>
                <p className="text-blue-100 text-2xl leading-relaxed mb-8">
                  Ofrecemos soluciones integrales de seguridad perimetral para empresas, industrias y propiedades privadas. Nuestro servicio incluye tecnología avanzada, monitoreo constante y personal altamente capacitado.    
                </p>
                
                {/* Call to Action Button */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-white text-teal-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex items-center space-x-2"
                >
                  <span>Solicitar Servicios</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>

              {/* Right Side - 70% */}
              <div className="lg:w-[70%] w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Tarjeta 1 - Superior Izquierda */}
                  <div className="group bg-white backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-gray-100 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden">
                    <div className="flex h-70">
                      {/* Contenido - 70% */}
                      <div className="w-[60%] flex flex-col justify-between p-6">
                        <div>
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4">
                              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                              </svg>
                            </div>
                            <h3 className="text-xl font-bold text-black">Firewall de Red</h3>
                          </div>
                          <p className="text-black text-base leading-relaxed">
                            Filtra el tráfico entrante y saliente para bloquear accesos no autorizados y proteger los sistemas internos de amenazas externas.
                          </p>
                        </div>
                      </div>
                      {/* Imagen - 30% pegada al borde */}
                      <div className="w-[40%] bg-gray-50 flex items-center justify-center">
                        <img src="/images/image 7.png" alt="Firewall Icon" className="h-[110%] h-max-full rounded-sm" />
                      </div>
                    </div>
                  </div>

                  {/* Tarjeta 2 - Superior Derecha */}
                  <div className="group bg-white backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-gray-100 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden">
                    <div className="flex h-70">
                      {/* Contenido - 70% */}
                      <div className="w-[60%] flex flex-col justify-between p-6">
                        <div>
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4">
                              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                              </svg>
                            </div>
                            <h3 className="text-xl font-bold text-black">IDS/IPS</h3>
                          </div>
                          <p className="text-black text-base leading-relaxed">
                            Monitorean y analizan el tráfico de red en tiempo real para detectar y prevenir actividades maliciosas.
                          </p>
                        </div>
                      </div>
                      {/* Imagen - 30% */}
                      <div className="w-[40%] bg-gray-50 flex items-center justify-center">
                        <img src="/images/image 8.png" alt="IDS/IPS Icon" className="h-[110%] h-max-full rounded-sm" />
                      </div>
                    </div>
                  </div>

                  {/* Tarjeta 3 - Inferior Izquierda */}
                  <div className="group bg-white backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-gray-100 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden">
                    <div className="flex h-70">
                      {/* Contenido - 70% */}
                      <div className="w-[60%] flex flex-col justify-between p-6">
                        <div>
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4">
                              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 3C6.477 3 2 7.477 2 13s4.477 10 10 10 10-4.477 10-10a9.987 9.987 0 00-1.382-5.016M12 8v4l3 2" />
                              </svg>
                            </div>
                            <h3 className="text-xl font-bold text-black">Segmentación de Red</h3>
                          </div>
                          <p className="text-black text-base leading-relaxed">
                            Divide la red en zonas seguras para limitar el alcance de posibles ataques y mejorar el control del tráfico.
                          </p>
                        </div>
                      </div>
                      {/* Imagen - 30% */}
                      <div className="w-[40%] bg-gray-50 flex items-center justify-center">
                        <img src="/images/image 9.png" alt="Network Segmentation Icon" className="h-[110%] h-max-full rounded-sm" />
                      </div>
                    </div>
                  </div>

                  {/* Tarjeta 4 - Inferior Derecha */}
                  <div className="group bg-white backdrop-blur-lg rounded-2xl border border-white/20 hover:bg-gray-100 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden">
                    <div className="flex h-70">
                      {/* Contenido - 70% */}
                      <div className="w-[60%] flex flex-col justify-between p-6">
                        <div>
                          <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center mr-4">
                              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                              </svg>
                            </div>
                            <h3 className="text-xl font-bold text-black">Cloud Perimeter Security</h3>
                          </div>
                          <p className="text-black text-base leading-relaxed">
                            Protección de entornos cloud mediante políticas de acceso, cifrado y firewalls virtuales.
                          </p>
                        </div>
                      </div>
                      {/* Imagen - 30% */}
                      <div className="w-[40%] bg-gray-50 flex items-center justify-center">
                        <img src="/images/image 10.png" alt="Cloud Security Icon" className="h-[110%] h-max-full rounded-sm" />
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <ServiceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={securityService}
        onContact={handleContactRequest}
      />
    </>
  )
}