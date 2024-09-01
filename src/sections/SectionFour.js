import React,{useEffect} from 'react'
import { BsArrowRight } from "react-icons/bs";
import SlidingText from '../accesories/SlidingText';
import Cardtemp from '../accesories/Cardtemp';
import AOS from 'aos'
import 'aos/dist/aos.css'


function SectionFour() {
    const formatDate = () => {
        const date = new Date(); // Get the current date
        const day = date.getDate(); // Get day of the month
        const month = date.toLocaleString('default', { month: 'long' }); // Get full month name
        const year = date.getFullYear(); // Get full year
    
        return `${day} ${month} ${year}`; // Format the date as "21 August 2024"
      };
      const cardData = [{
        bgimage:'trend1.jpg',
        cardHeader:'Topic one',
        paragraph:'This is to say that it works',
        cardbtn:'Go here'
      },{
        bgimage:'trend2.jpg',
        cardHeader:'Topic Two',
        paragraph:'This is to say that it works',
        cardbtn:'Go here'
      },{
        bgimage:'trend3.jpg',
        cardHeader:'Topic Three',
        paragraph:'This is to say that it works',
        cardbtn:'Go here'
      },{
        bgimage:'trend4.jpg',
        cardHeader:'Topic Four',
        paragraph:'This is to say that it works',
        cardbtn:'Go here'
      },]
      useEffect(()=>{
        AOS.init({duration: 2000});
      },[]);
  return (
    <div>
        <div className="sec4header">
            <h1 data-aos="fade-in">Trending Topics</h1>
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
        <Cardtemp cardDetails = {cardData} />
        </div>
    </div>
  )
}

export default SectionFour