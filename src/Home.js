import React from 'react'
import Navigation from './sections/Navigation'
import SectionOne from './sections/SectionOne'
import SectionTwo from './sections/SectionTwo'
import SectionThree from './sections/SectionThree'
import SectionFour from './sections/SectionFour'
import Footer from './sections/Footer'
import BackToTop from './accesories/BackTop'
import SectionFive from './sections/SectionFive'

function Home() {
  const heading = 'To check'
  return (
    <div>
      <Navigation/>
      <SectionOne/>
      <SectionTwo />
      <SectionThree/>
      <SectionFour />
      <SectionFive/>
      <Footer/>
      <BackToTop/>
    </div>
  )
}

export default Home