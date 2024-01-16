import React from 'react'
import Header from '../Header/Header'
import Footer2 from '../../footer2/footer'
import Navbar from '../navigation/Navbar'
import Hero from '../hero/hero'
import About from '../about/About'
import TextPattern from "../textPattern/textPattern"
import RegistrationP from '../registrationP/RegistrationP'
import OpenTestCenters from '../OpenTestCenters/OpenTestCenters'
import Testimonials from '../Testimonials/Testimonials'
import FAQ from '../FAQ/FAQ'
import Contact from '../contact/contact'

export default function Home() {
  return (
    <>
      <Header/>
      <Navbar/>
      <Hero/>
      <About/>
      <TextPattern/>
      <RegistrationP/>
      <OpenTestCenters/>
      <Testimonials/>
      <FAQ/>
      <Contact/>
      <Footer2/>
    </>
  )
}
