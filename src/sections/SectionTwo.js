import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function SectionTwo() {
  useEffect(()=>{
    AOS.init({duration: 2000});
  },[]);
  return (
    <div className='sectionTwoContainer' data-aos="zoom-in">
        <h1>About us</h1>
        

        <h2>THE PEAOPLE'S RADIO</h2>
        <p>Radio station built for the people, buy the People and Dedicated to serving our diverse community listeners.</p>
        <h2>EXCLUSIVE INTERVIEWS AND FEATURES</h2>
        <p>Gain insiders access to the music industry with our exclusive interviews and features.
           Here from your favourite artist, discover new talent and get stories behind the song.</p>

           <div >

            hello world

           </div>

        <h2>SPEACIAL EVENTS AND LIVE BROADCAST</h2>
        <p>Join out special events that brings our community together, wheather it's a live concert, a charity fundraiser or a cultural celebration.</p>
    </div>
  )
}

export default SectionTwo