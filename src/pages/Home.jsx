import React from 'react'
import ImageCarosal from '../Components/Carosal/ImageCarosal'
import AboutPage from '../Components/About/AboutComponent'
import WhyUsSection from '../Components/Specialities/Specialities'
import SpecialsSection from '../Components/SpecialServices/SpecialServices'
import TestimonialsSection from '../Components/Testimonials/Testimonials'
import Gallery from '../Components/Gallery/Gallery'
import ContactUs from '../Components/ContactUs/ContactUs'
import ClientSection from '../Components/OurClients/OurClients'

function Home() {
  return (
    <>
    <ImageCarosal/>
    <AboutPage/>
    <WhyUsSection/>
    <SpecialsSection/>
    <TestimonialsSection/>
    <ClientSection/>
    <Gallery/>
    <ContactUs/>
    </>
  )
}

export default Home