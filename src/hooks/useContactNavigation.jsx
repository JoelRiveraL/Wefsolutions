import { useNavigate, useLocation } from 'react-router-dom'

export const useContactNavigation = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const scrollToContact = (productInfo = null) => {
    if (location.pathname === '/') {
      // Si estamos en Home, hacer scroll al formulario
      setTimeout(() => {
        const contactElement = document.getElementById('contact-form')
        if (contactElement) {
          contactElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          })
          
          // Si hay información del producto, llenar el campo
          if (productInfo) {
            const messageField = document.getElementById('product-interest')
            if (messageField) {
              messageField.value = `Estoy interesado en obtener una licencia de ${productInfo}. Me gustaría recibir más información sobre precios, características y proceso de compra.`
              messageField.focus()
            }
          }
        }
      }, 100)
    } else {
      // Si no estamos en Home, navegar allí con el estado
      navigate('/', { 
        state: { 
          scrollToContact: true,
          productInfo: productInfo
        }
      })
    }
  }

  return { scrollToContact }
}