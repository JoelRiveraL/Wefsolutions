import React, { useState } from 'react'
import { Modal } from './Modal'

export const LicenseButton = ({ 
  color = "blue", 
  productName = "este producto",
  onContactRequest
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const colorMap = {
    cyan: "bg-cyan-600 hover:bg-cyan-700",
    blue: "bg-blue-600 hover:bg-blue-700",
    red: "bg-red-600 hover:bg-red-700",
    green: "bg-green-600 hover:bg-green-700",
    indigo: "bg-indigo-600 hover:bg-indigo-700"
  }

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleConfirm = () => {
    setIsModalOpen(false)
    onContactRequest && onContactRequest(productName)
  }

  return (
    <>
      <button 
        onClick={handleOpenModal}
        className={`w-full ${colorMap[color] || colorMap.blue} text-white py-3 rounded-lg transition-colors duration-300 font-semibold`}
      >
        Obtener Licencia
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="¡Excelente elección!"
        message={`Te ayudaremos a obtener la licencia de ${productName}. Nuestro equipo se pondrá en contacto contigo para brindarte información detallada y asistencia personalizada.`}
        onConfirm={handleConfirm}
        confirmText="Ir a Contacto"
        cancelText="Ahora no"
      />
    </>
  )
}