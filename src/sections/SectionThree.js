import React, {useEffect} from 'react';
import CardData from './CardData';
import AOS from 'aos'
import 'aos/dist/aos.css'



function SectionThree() {
    useEffect(()=>{
      AOS.init({duration: 2000});
    },[]);
  return (
    <div>
        <div className="girdcontainer">
            <div className=''  data-aos="flip-up"  >
                <CardData className=''
                 heading='Listen Live Radio Test'
                 text='Tune in live to Jalla Radio 98.1FM'
                 bgimage='newsbg.jpg'
                 btn='Go here'
                //  height='400px'
                 padding='200px 20px 40px'
                 textAlign='center'
                 />
                
            </div>
            <div className="" data-aos="zoom-in-down"  >
            <CardData
                 heading='Features Test'
                 text='Gain insider access to the music
                  industry with our exclusive interview and features.'
                 bgimage='ftbg.jpg'
                 btn='Go here' 
                 padding='40px 20px 20px'
                 />
            </div>
             <div className="" data-aos="flip-right" >
             <CardData
                 heading='Music Streaming'
                 text='Never miss a beat with our on-demand podcast library.'
                 bgimage='musicbg.jpg'
                 btn='Go here'
                 padding='70px 20px 20px'
                 textAlign='right'
                 />
            </div> 
            <div className="" data-aos="flip-down" >
            <CardData
                 heading='Voice of the People'
                 text='Share your thought, requests, and stories - after all, this is the people`s Radio'
                 bgimage='pepsbg.jpg'
                 btn='Go here'  
                 padding='130px 20px 20px'  
                 textAlign='center'
                 />
            </div>
        </div>
    </div>
  )
}

export default SectionThree