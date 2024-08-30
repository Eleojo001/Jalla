import React from 'react'
import { BsFilePlay } from "react-icons/bs";


function SectionOne() {
    
  return (
    <div>
    <div className="background-video-container">
      {/* Background Video */}
      <video autoPlay muted loop className="background-video">
        <source src="bgGif.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Dark Overlay */}
      <div className="overlay"></div>

      {/* Content on top of the overlay */}
      <div className="content">
        <h1>Jalla Radio 98.1FM  </h1>
        <p>THE PEOPLE'S RADIO.</p>
      <div className="jallaradiolink"style={{ backgroundImage:'url(logo192.png)'
           }} >
      {/* <img src="logo192.png" alt="" /> */}
      <BsFilePlay className='playIcon' /> <span>Listen Live</span>
      </div>

      </div>

    </div>

    </div>
  )
}

export default SectionOne