import React from 'react'
import { BsArrowRight } from "react-icons/bs";
import SlidingText from '../accesories/SlidingText';


function SectionFour() {
    const formatDate = () => {
        const date = new Date(); // Get the current date
        const day = date.getDate(); // Get day of the month
        const month = date.toLocaleString('default', { month: 'long' }); // Get full month name
        const year = date.getFullYear(); // Get full year
    
        return `${day} ${month} ${year}`; // Format the date as "21 August 2024"
      };
  return (
    <div>
        <div className="sec4header">
            <h1>Top Stories</h1>
        </div>
        <div className="sec4p">
            <p>We cover everything from music, news and album reviews
             to cultural insights and community highlight</p>
        </div>
        <div className="sec4btn">
        <button className='sect4btn'>
        Go here <BsArrowRight />
        </button>
        </div>
        <div className="sect4date">
        <div>{formatDate()}</div>
        <div className="textslider">
          <h4>Trending</h4>  <SlidingText/>
        </div>
        </div>
        <div className="trendingStories">
        <div className=" card trendCard" style={{backgroundImage:'url(trend1.jpg)',}} >
                <div className="overlay"></div>
                <div className="newsContent" style={{textAlign:'center', padding:'80px 20px', marginTop:'150px'}}>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, deserunt! </h2> 
                <button className='goherebtn' style={{textAlign:'center', justifyContent:'center'}} >
                    Go here <BsArrowRight />
                </button>
                </div>
            </div> 
        <div className=" card trendCard" style={{backgroundImage:'url(trend2.jpg)',}} >
                <div className="overlay"></div>
                <div className="newsContent" style={{textAlign:'center', padding:'80px 20px', marginTop:'150px'}}>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, deserunt! </h2> 
                <button className='goherebtn' style={{textAlign:'center', justifyContent:'center'}} >
                    Go here <BsArrowRight />
                </button>
                </div>
            </div> 
        <div className=" card trendCard" style={{backgroundImage:'url(trend3.jpg)',}} >
                <div className="overlay"></div>
                <div className="newsContent" style={{textAlign:'center', padding:'80px 20px', marginTop:'150px'}}>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, deserunt! </h2> 
                <button className='goherebtn' style={{textAlign:'center', justifyContent:'center'}} >
                    Go here <BsArrowRight />
                </button>
                </div>
            </div> 
        <div className=" card trendCard" style={{backgroundImage:'url(trend4.jpg)',}} >
                <div className="overlay"></div>
                <div className="newsContent" style={{textAlign:'center', padding:'80px 20px', marginTop:'150px'}}>
                <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, deserunt! </h2> 
                <button className='goherebtn' style={{textAlign:'center', justifyContent:'center'}} >
                    Go here <BsArrowRight />
                </button>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default SectionFour