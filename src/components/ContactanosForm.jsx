import React, { useState } from 'react'

export const ContactanosForm = () => {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    telefono: '',
    email: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Datos del formulario:', formData);
    
    // Simular envío
    setTimeout(() => {
      alert('¡Mensaje enviado correctamente! Te contactaremos pronto.');
      setFormData({
        nombres: '',
        apellidos: '',
        telefono: '',
        email: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div>
      {/* Contact Form Section */}
      <div className="relative overflow-hidden max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Blobs */}
        <div className="blob bg-blue-500/14 w-96 h-96 absolute -bottom-48 -left-48 z-[1]"></div>
        <div className="blob bg-purple-500/14 w-96 h-96 absolute -top-48 -right-48 z-[1]"></div>

        {/* Header */}
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Contáctanos</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            ¿Necesitas información, tienes alguna duda o te interesa algún producto? No dudes en contactarnos. 
            Estamos aquí para ayudarte y responder cualquier consulta que tengas.
          </p>
        </div>

        {/* Form Container */}
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Nombres y Apellidos */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="nombres" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombres *
                  </label>
                  <input
                    type="text"
                    id="nombres"
                    name="nombres"
                    value={formData.nombres}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="Ingresa tus nombres"
                  />
                </div>
                
                <div className="group">
                  <label htmlFor="apellidos" className="block text-sm font-semibold text-gray-700 mb-2">
                    Apellidos *
                  </label>
                  <input
                    type="text"
                    id="apellidos"
                    name="apellidos"
                    value={formData.apellidos}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="Ingresa tus apellidos"
                  />
                </div>
              </div>

              {/* Teléfono y Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group">
                  <label htmlFor="telefono" className="block text-sm font-semibold text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="+57 300 123 4567"
                  />
                </div>
                
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#10b981] focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              {/* Botón de Envío */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative bg-gradient-to-r from-[#10b981] to-[#10a0b9] text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-[#0f9671] hover:to-[#0e8ea1] transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none min-w-[200px]"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center space-x-2">
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                      </svg>
                      <span>Enviando...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <span>Enviar</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </div>
                  )}
                </button>
              </div>

              {/* Nota de Privacidad */}
              <div className="text-center text-sm text-gray-500 pt-4">
                <p>
                  Al enviar este formulario, aceptas que procesemos tus datos para contactarte. 
                  Respetamos tu privacidad y no compartiremos tu información con terceros.
                </p>
              </div>

            </form>
          </div>
        </div>

        {/* Información de Contacto Adicional */}
        <div className="max-w-4xl mx-auto mt-16 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Teléfono */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-[#10b981] to-[#10a0b9] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Teléfono</h3>
              <p className="text-gray-600">+57 (300) 123-4567</p>
            </div>

            {/* Email */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-[#10b981] to-[#10a0b9] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">info@wefsolution.com</p>
            </div>

            {/* Ubicación */}
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-[#10b981] to-[#10a0b9] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ubicación</h3>
              <p className="text-gray-600">Quito, Ecuador</p>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}