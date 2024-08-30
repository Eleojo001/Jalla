import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";



function SectionThree() {
  return (
    <div>
        <div className="girdcontainer">
            <div className="Newscard card" style={{backgroundImage:'url(newsbg.jpg)'}} >
                <div className="overlay"></div>
                <div className="newsContent">
                <h2>Listen Live Radio</h2> 
                <p>Tune in live to Jalla Radio 98.1FM</p>
                <button className='goherebtn'>
                    Go here <BsArrowRight />
                </button>
                </div>
            </div>
            <div className=" card feetcard" style={{backgroundImage:'url(ftbg.jpg)'}} >
                <div className="overlay"></div>
                <div className="newsContent" style={{textAlign:'right', paddingBottom:'80px'}}>
                <h2>Features</h2> 
                <p>Gain insider access to the music industry with our exclusive interview and features.</p>
                <button className='goherebtn'>
                    Go here <BsArrowRight />
                </button>
                </div>
            </div>
            <div className=" card musiccard" style={{backgroundImage:'url(musicbg.jpg)'}} >
                <div className="overlay"></div>
                <div className="newsContent" style={{textAlign:'right', paddingBottom:'80px'}}>
                <h2>Music Streaming</h2> 
                <p>Never miss a beat with our on-demand podcast library.</p>
                <button className='goherebtn'>
                    Go here <BsArrowRight />
                </button>
                </div>
            </div>
            <div className=" card pepcard" style={{backgroundImage:'url(pepsbg.jpg)'}} >
                <div className="overlay"></div>
                <div className="newsContent" style={{textAlign:'right', paddingBottom:'80px'}}>
                <h2>People's voice </h2> 
                <p>Share your thought, requests, and stories - after all, this is the people's Radio</p>
                <button className='goherebtn'>
                    Go here <BsArrowRight />
                </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionThree