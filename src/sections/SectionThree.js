import React, {useEffect} from 'react';
import CardData from './CardData';
import AOS from 'aos'
import 'aos/dist/aos.css'



function SectionThree() {
  const newsArray = [
    { id: 12, heading: 'Listen Live Radio Test',
      text:'Tune in live to Jalla Radio 98.1FM',
      bgimage:'newsbg.jpg'
     },
  ];
  const feedsArray = [
    { id: 1, heading: 'Features',
      text:'Gain insider access to the music industry with our exclusive interview and features.',
      bgimage:'ftbg.jpg'
     },
  ];
  const MusicArray = [
    { id: 12, heading: 'Music Streaming',
      text:'Never miss a beat with our on-demand podcast library.',
      bgimage:'musicbg.jpg'
     },
  ];
  const podcatArray = [
    { id: 12, heading: 'Voice of the People',
      text:'Share your thought, requests, and stories - after all, this is the people`s Radio',
      bgimage:'pepsbg.jpg'
     },
  ];
  
  // Find the object with the largest id
  const latestNews = newsArray.reduce((max, current) => {
    return current.id > max.id ? current : max;
  }, newsArray[0]);
  const latestFeeds = feedsArray.reduce((max, current) => {
    return current.id > max.id ? current : max;
  }, feedsArray[0]);
  const latesMusic = MusicArray.reduce((max, current) => {
    return current.id > max.id ? current : max;
  }, MusicArray[0]);
  const latestPodcast = podcatArray.reduce((max, current) => {
    return current.id > max.id ? current : max;
  }, podcatArray[0]);





    useEffect(()=>{
      AOS.init({duration: 2000});


    },[]);
  return (
    <div>
      <h1 data-aos="fade-right">Our <span style={{color:'rgb(27,147,19)'}}>Specials</span></h1>
      <p data-aos="fade-left">Take a sneak peek of every category on this channel below.</p>
        <div className="girdcontainer">
            <div className=''  data-aos="flip-up"  >
                <CardData className=''
                 heading={latestNews.heading}
                 text={latestNews.text}
                 bgimage={latestNews.bgimage}
                 btn='Go here'
                //  height='400px'
                 padding='80px 20px 20px'
                 textAlign='center'
                 />
                
            </div>
            <div className="" data-aos="zoom-in-down"  >
            <CardData
                 heading={latestFeeds.heading}
                 text={latestFeeds.text}
                 bgimage={latestFeeds.bgimage}
                 btn='Go here' 
                 padding='40px 20px 20px'
                 />
            </div>
             <div className="" data-aos="flip-right" >
             <CardData
                 heading={latesMusic.heading}
                 text={latesMusic.text}
                 bgimage={latesMusic.bgimage}
                 btn='Go here'
                 padding='50px 20px 20px'
                 textAlign='right'
                 />
            </div> 
            <div className="" data-aos="flip-down" >
            <CardData
                 heading={latestPodcast.heading}
                 text={latestPodcast.text}
                 bgimage={latestPodcast.bgimage}
                 btn='Go here'  
                 padding='60px 20px 20px'  
                 textAlign='center'
                 />
            </div>
        </div>
    </div>
  )
}

export default SectionThree