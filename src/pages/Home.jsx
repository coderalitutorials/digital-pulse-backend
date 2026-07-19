








import React from 'react'
import HeroSection from '../components/HeroSection'

import IronServices from '../components/IronServices'

import AboutIntroSection from '../components/AboutIntro'
import CertifiedLogosSection from "../components/CertifiedLogosSection"
import WhyChoosePrimeShield from '../components/WhyChoosePrimeShield'
import PrimeShieldTestimonials from '../components/PrimeShieldTestimonials'
import SuperGuardServicesSection from '../components/IronServices'
import WhyChooseSuperGuard from '../components/WhyChoosePrimeShield'
import TestimonialsSection from '../components/PrimeShieldTestimonials'

const Home = () => {
  return (
    <div>
      <HeroSection/>
      <AboutIntroSection/>
      <CertifiedLogosSection/> 
  
      <SuperGuardServicesSection/>
    <WhyChooseSuperGuard/>
       <TestimonialsSection/>
   
     
    </div>
  )
}

export default Home