import React from 'react'
import Navigation from './sections/Navigation'
import SectionOne from './sections/SectionOne'
import SectionTwo from './sections/SectionTwo'
import SectionThree from './sections/SectionThree'
import SectionFour from './sections/SectionFour'
import Footer from './sections/Footer'

function Home() {
  return (
    <div>
      <Navigation/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <Footer/>
    </div>
  )
}

export default Home