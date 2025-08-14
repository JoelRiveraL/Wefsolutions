import React from 'react'
import { LicenseButton } from '../LicenseButton'
import { useContactNavigation } from '../../hooks/useContactNavigation'

export const ESETService = () => {
  const { scrollToContact } = useContactNavigation()

  const handleContactRequest = (productName) => {
    scrollToContact(productName)
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">
      {/* Header con logo y título */}
      <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-6 mb-8 text-white">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,7C13.4,7 14.8,8.6 14.8,10V11H16V18H8V11H9.2V10C9.2,8.6 10.6,7 12,7M12,8.2C11.2,8.2 10.4,8.7 10.4,10V11H13.6V10C13.6,8.7 12.8,8.2 12,8.2Z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold">ESET Antivirus</h2>
            </div>
            <p className="text-cyan-100 text-lg">
              Protección avanzada contra malware, ransomware y otras amenazas en línea.
            </p>
          </div>
          <img src="/images/antivirus.jpg" alt="ESET Logo" className="h-20 w-20 object-contain rounded-lg bg-white/10 p-2" />
        </div>
      </div>

      {/* Planes de licencias */}
      <div className="grid md:grid-cols-3 gap-6">
        
        {/* Internet Security */}
        <div className="border border-cyan-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-cyan-300">
          <div className="text-center mb-4">
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Internet Security</h3>
            <div className="text-3xl font-bold text-cyan-600 mb-4">$39.99</div>
          </div>
          
          <ul className="space-y-3 mb-6 text-sm">
            <li className="flex items-center">
              <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Protección para 1 dispositivo
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Protección en tiempo real
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Firewall personal
            </li>
          </ul>
          
          <LicenseButton
            color="cyan"
            productName="ESET Internet Security"
            onContactRequest={handleContactRequest}
          />
        </div>

        {/* NOD32 Antivirus */}
        <div className="border border-cyan-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-cyan-300">
          <div className="text-center mb-4">
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">NOD32 Antivirus</h3>
            <div className="text-3xl font-bold text-cyan-600 mb-4">$29.99</div>
          </div>
          
          <ul className="space-y-3 mb-6 text-sm">
            <li className="flex items-center">
              <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Protección para 1 dispositivo
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Anti-Phishing
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Exploración en la nube
            </li>
          </ul>
          
          <LicenseButton
            color="cyan"
            productName="ESET NOD32 Antivirus"
            onContactRequest={handleContactRequest}
          />
        </div>

        {/* Smart Security Premium */}
        <div className="border-2 border-cyan-400 rounded-xl p-6 relative hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-cyan-50 to-blue-50">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Recomendado</span>
          </div>
          
          <div className="text-center mb-4 mt-4">
            <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Smart Security Premium</h3>
            <div className="text-3xl font-bold text-cyan-600 mb-4">$59.99</div>
          </div>
          
          <ul className="space-y-3 mb-6 text-sm">
            <li className="flex items-center">
              <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Protección para 5 dispositivos
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Encriptación de datos
            </li>
            <li className="flex items-center">
              <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Gestor de contraseñas
            </li>
          </ul>
          
          <LicenseButton
            color="cyan"
            productName="ESET Smart Security Premium"
            onContactRequest={handleContactRequest}
          />
        </div>

      </div>
    </div>
  )
}