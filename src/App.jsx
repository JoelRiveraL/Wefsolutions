import './App.css'
import { ContactanosForm } from './components/ContactanosForm.jsx'
import { FeaturesSection } from './components/FeaturesSection.jsx'
import { Footer } from './components/Footer.jsx'
import { HeroSection } from './components/HeroSection.jsx'
import { NavBar } from './components/NavBar.jsx'
import { PerimetralSecurity } from './components/PerimetralSecurity.jsx'
import { useState } from 'react'
import { ServiceDetails } from './components/ServiceDetails.jsx'

function App() {
  const [isOpenServices, setIsOpenServices] = useState("")

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <NavBar />

      <HeroSection />

      <FeaturesSection isOpenService={setIsOpenServices} value={isOpenServices} />
      {isOpenServices != "" && (
        <ServiceDetails isOpenService={setIsOpenServices} value={ isOpenServices} />
      )}

      <PerimetralSecurity />

      <ContactanosForm />

      <Footer />
    </div>
  )
}

export default App
