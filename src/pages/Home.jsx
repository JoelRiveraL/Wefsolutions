import React from 'react'
import { HeroSection } from '../components/HeroSection'
import { FeaturesSection } from '../components/FeaturesSection'
import { PerimetralSecurity } from '../components/PerimetralSecurity'
import { AdditionalServices } from '../components/AdditionalServices'
import { ContactanosForm } from '../components/ContactanosForm'
import { ServiceDetails } from '../components/ServiceDetails'
import { useState } from 'react'

export const Home = () => {
  const [isOpenServices, setIsOpenServices] = useState("")

  return (
    <div>
      <HeroSection />
      
      <FeaturesSection isOpenService={setIsOpenServices} value={isOpenServices} />
      {isOpenServices !== "" && (
        <ServiceDetails isOpenService={setIsOpenServices} value={isOpenServices} />
      )}

      <PerimetralSecurity />

      <AdditionalServices />

      <ContactanosForm />
    </div>
  )
}