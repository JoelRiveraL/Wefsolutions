import React, { useEffect, useState } from 'react'

export const ServiceDetails = ({ isOpenService, value }) => {
  const [activeLink, setActiveLink] = useState('Inicio') // Estado para el enlace activo

  useEffect(() => {
    if (value != "") {
      setActiveLink(value)
    }
 }, [value])

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName)
  }

  return (
      <div>
          <div className='bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 h-[690px]'>
            <div className='bg-slate-200 p-8 rounded-sm max-w-[80%] mx-auto mt-16'>
              {/* Mini navbar para la sección gris */}
              <div className='flex items-left justify-left mb-6'>
                    <nav className='flex items-left justify-left w-full space-x-12'>
                        <a 
                          href="#" 
                          onClick={(e) => {
                            e.preventDefault()
                            handleLinkClick('ESET Antivirus')
                          }}
                          className={`px-4 py-2 rounded-lg text-xl font-medium transition-all duration-300 relative group flex items-center space-x-2 ${
                            activeLink === 'ESET Antivirus' 
                              ? 'bg-[#074F6C] text-white' 
                              : 'text-[#074F6C] hover:text-[#0a5f7a] hover:bg-[#074F6C]/10'
                          }`}
                        >
                          {/* Icono de Escudo para ESET */}
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11H16V18H8V11H9.2V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.4,8.7 10.4,10V11H13.6V10C13.6,8.7 12.8,8.2 12,8.2Z" />
                          </svg>
                          <span>ESET</span>
                          {activeLink !== 'ESET Antivirus' && (
                            <span className="absolute -bottom-1 left-4 w-0 h-0.5 bg-[#074F6C] transition-all duration-300  "></span>
                          )}
                        </a>
                        
                        <a 
                          href="#" 
                          onClick={(e) => {
                            e.preventDefault()
                            handleLinkClick('Adobe Creative Cloud')
                          }}
                          className={`px-4 py-2 rounded-lg text-xl font-medium transition-all duration-300 relative group flex items-center space-x-2 ${
                            activeLink === 'Adobe Creative Cloud' 
                              ? 'bg-[#074F6C] text-white' 
                              : 'text-[#074F6C] hover:text-[#0a5f7a] hover:bg-[#074F6C]/10'
                          }`}
                        >
                          {/* Icono de Imagen para Adobe */}
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z" />
                          </svg>
                          <span>Adobe</span>
                          {activeLink !== 'Adobe Creative Cloud' && (
                            <span className="absolute -bottom-1 left-4 w-0 h-0.5 bg-[#074F6C] transition-all duration-300  "></span>
                          )}
                        </a>
                        
                        <a 
                          href="#" 
                          onClick={(e) => {
                            e.preventDefault()
                            handleLinkClick('Microsoft Office')
                          }}
                          className={`px-4 py-2 rounded-lg text-xl font-medium transition-all duration-300 relative group flex items-center space-x-2 ${
                            activeLink === 'Microsoft Office' 
                              ? 'bg-[#074F6C] text-white' 
                              : 'text-[#074F6C] hover:text-[#0a5f7a] hover:bg-[#074F6C]/10'
                          }`}
                        >
                          {/* Icono de Microsoft */}
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M11.5,2V11.5H2V2H11.5M22,2V11.5H12.5V2H22M11.5,22V12.5H2V22H11.5M22,22V12.5H12.5V22H22Z" />
                          </svg>
                          <span>Microsoft</span>
                          {activeLink !== 'Microsoft Office' && (
                            <span className="absolute -bottom-1 left-4 w-0 h-0.5 bg-[#074F6C] transition-all duration-300  "></span>
                          )}
                        </a>
                          
                        <a 
                          href="#" 
                          onClick={(e) => {
                            e.preventDefault()
                            handleLinkClick('AutoDesk')
                          }}
                          className={`px-4 py-2 rounded-lg text-xl font-medium transition-all duration-300 relative group flex items-center space-x-2 ${
                            activeLink === 'AutoDesk' 
                              ? 'bg-[#074F6C] text-white' 
                              : 'text-[#074F6C] hover:text-[#0a5f7a] hover:bg-[#074F6C]/10'
                          }`}
                        >
                          {/* Icono de Diseño 3D para Autodesk */}
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12,2L13.09,8.26L22,9L13.09,9.74L12,16L10.91,9.74L2,9L10.91,8.26L12,2M12,21L10.91,14.74L2,14L10.91,13.26L12,7L13.09,13.26L22,14L13.09,14.74L12,21Z" />
                          </svg>
                          <span>Autodesk</span>
                          {activeLink !== 'AutoDesk' && (
                            <span className="absolute -bottom-1 left-4 w-0 h-0.5 bg-[#074F6C] transition-all duration-300  "></span>
                          )}
                        </a>
                          
                        <a 
                          href="#" 
                          onClick={(e) => {
                            e.preventDefault()
                            handleLinkClick('Windows')
                          }}
                          className={`px-4 py-2 rounded-lg text-xl font-medium transition-all duration-300 relative group flex items-center space-x-2 ${
                            activeLink === 'Windows' 
                              ? 'bg-[#074F6C] text-white' 
                              : 'text-[#074F6C] hover:text-[#0a5f7a] hover:bg-[#074F6C]/10'
                          }`}
                        >
                          {/* Icono de Windows */}
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M3,12V6.75L9,5.43V11.91L3,12M20,3V11.75L10,11.9V5.21L20,3M3,13L9,13.09V19.9L3,18.75V13M20,13.25V22L10,20.09V13.1L20,13.25Z" />
                          </svg>
                          <span>Windows</span>
                          {activeLink !== 'Windows' && (
                            <span className="absolute -bottom-1 left-4 w-0 h-0.5 bg-[#074F6C] transition-all duration-300  "></span>
                          )}
                        </a>
                  </nav>
                  {/* Botón X alineado a la derecha */}
                  <button
                    onClick={() => isOpenService("")}
                    className="bg-white text-red-500 rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200 shadow-lg  cursor-pointer"
                    aria-label="Cerrar"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                {/* Línea divisoria mejorada */}
                <div className="relative mb-8">
                  <hr className='border-0 h-[2px] bg-[#074F6C]'/>
                  <div className="absolute inset-0 h-[2px] bg-[#074F6C]"></div>
                </div>
                  
                  {/* Contenido dependiendo la opcion seleccionada */}
                  {activeLink === 'ESET Antivirus' && (
                      <div>
                        <div className='bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-700 p-8 rounded-lg shadow-lg mb-8'>
                              <h1 className='text-4xl font-bold text-white mb-4'>ESET Antivirus</h1>
                              <p className='text-lg font-bold text-white mb-6'>
                                  ESET Antivirus es una solución de seguridad integral que protege tu dispositivo contra virus, malware y amenazas en línea. Con una interfaz intuitiva y tecnología avanzada, ESET garantiza una navegación segura y un rendimiento óptimo.
                            </p>
                        </div>
                        <div className='bg-blue-50 p-6'>
                            <h2 className='text-2xl font-bold mb-4'>Características Principales</h2>
                            <ul className='list-disc pl-5 space-y-2'>
                                <li>Protección en tiempo real contra amenazas.</li>
                                <li>Escaneo programado y manual de archivos.</li>
                                <li>Actualizaciones automáticas de la base de datos de virus.</li>
                                <li>Interfaz fácil de usar y personalizable.</li>
                              </ul>
                        </div>
                    </div>
                  )
                  }
                  {activeLink === 'Adobe Creative Cloud' && (
                      <div>
                      <div className='bg-gradient-to-l from-orange-400 via-red-500 to-red-700 p-8 rounded-lg shadow-lg mb-8'>
                            <h1 className='text-4xl font-bold text-white mb-4'>Adobe</h1>
                            <p className='text-lg font-bold text-white mb-6'>
                                Adobe ofrece una suite de herramientas creativas que incluyen Photoshop, Illustrator y Premiere Pro. Estas aplicaciones son esenciales para diseñadores gráficos, editores de video y fotógrafos profesionales.
                          </p>
                      </div>
                      <div className='bg-blue-50 p-6'>
                            <h2 className='text-2xl font-bold mb-4'>Características Principales</h2>
                            <ul className='list-disc pl-5 space-y-2'>
                                <li>Herramientas avanzadas de edición de imágenes y videos.</li>
                                <li>Integración con Adobe Creative Cloud para almacenamiento y colaboración.</li>
                                <li>Actualizaciones regulares con nuevas funciones y mejoras.</li>
                                <li>Interfaz intuitiva y fácil de usar.</li>
                            </ul>
                      </div>
                  </div>
                  )
                  }
                  {activeLink === 'Microsoft Office' && (
                    <div>
                        <div className='bg-gradient-to-l from-blue-400 via-blue-600 to-blue-800 p-8 rounded-lg shadow-lg mb-8'>
                        <h1 className='text-4xl font-bold text-white mb-4'>Microsoft Office</h1>
                        <p className='text-lg font-bold text-white mb-6'>
                            Microsoft Office es la suite de productividad más utilizada en el mundo, que incluye Word, Excel, PowerPoint y más. Herramientas esenciales para empresas, estudiantes y profesionales que buscan eficiencia y colaboración.
                        </p>
                        </div>
                        <div className='bg-blue-50 p-6'>
                        <h2 className='text-2xl font-bold mb-4'>Características Principales</h2>
                        <ul className='list-disc pl-5 space-y-2'>
                            <li>Suite completa con Word, Excel, PowerPoint, Outlook y más.</li>
                            <li>Colaboración en tiempo real con OneDrive y SharePoint.</li>
                            <li>Plantillas profesionales y herramientas avanzadas de análisis.</li>
                            <li>Integración perfecta con el ecosistema Microsoft 365.</li>
                            <li>Actualizaciones automáticas y soporte técnico incluido.</li>
                        </ul>
                        </div>
                    </div>
                    )}
                  {activeLink === 'AutoDesk' && (
                    <div>
                        <div className='bg-gradient-to-l from-green-400 via-teal-500 to-blue-600 p-8 rounded-lg shadow-lg mb-8'>
                        <h1 className='text-4xl font-bold text-white mb-4'>Autodesk</h1>
                        <p className='text-lg font-bold text-white mb-6'>
                            Autodesk es líder mundial en software de diseño 3D, ingeniería y entretenimiento. Sus herramientas como AutoCAD, Maya y 3ds Max son fundamentales para arquitectos, ingenieros, diseñadores y profesionales creativos que buscan precisión y innovación.
                        </p>
                        </div>
                        <div className='bg-blue-50 p-6'>
                        <h2 className='text-2xl font-bold mb-4'>Características Principales</h2>
                        <ul className='list-disc pl-5 space-y-2'>
                            <li>AutoCAD para diseño técnico y arquitectónico de precisión.</li>
                            <li>Maya y 3ds Max para modelado 3D y animación profesional.</li>
                            <li>Inventor para diseño mecánico e ingeniería de productos.</li>
                            <li>Revit para Building Information Modeling (BIM).</li>
                            <li>Fusion 360 para diseño colaborativo en la nube.</li>
                            <li>Herramientas de simulación y análisis avanzado.</li>
                        </ul>
                        </div>
                    </div>
                )}
                {activeLink === 'Windows' && (
                    <div>
                        <div className='bg-gradient-to-l from-blue-500 via-indigo-600 to-purple-700 p-8 rounded-lg shadow-lg mb-8'>
                        <h1 className='text-4xl font-bold text-white mb-4'>Windows</h1>
                        <p className='text-lg font-bold text-white mb-6'>
                            Windows es el sistema operativo más utilizado en el mundo, diseñado para ofrecer una experiencia de usuario intuitiva y potente. Con herramientas integradas para productividad, entretenimiento y gestión, Windows proporciona una plataforma completa para usuarios domésticos y empresariales.
                        </p>
                        </div>
                        <div className='bg-blue-50 p-6'>
                        <h2 className='text-2xl font-bold mb-4'>Características Principales</h2>
                        <ul className='list-disc pl-5 space-y-2'>
                            <li>Interfaz moderna y personalizable con Windows 11.</li>
                            <li>Microsoft Store integrada con miles de aplicaciones.</li>
                            <li>Windows Defender para protección antivirus avanzada.</li>
                            <li>Cortana y búsqueda inteligente integrada.</li>
                            <li>Compatibilidad con aplicaciones legacy y modernas.</li>
                            <li>Actualizaciones automáticas y soporte técnico continuo.</li>
                        </ul>
                        </div>
                    </div>
                )}
          </div>
              
        </div>
    </div>
  )
}