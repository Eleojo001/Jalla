import React, {useEffect} from 'react'
import { BsArrowRight } from "react-icons/bs";
import AOS from 'aos'
import 'aos/dist/aos.css'

function Cardtemp({cardDetails}) {
  useEffect(()=>{
    AOS.init({duration: 2000});
  },[]);

  return (
    <div>
        <div className="cardData">
            {cardDetails.map((details, index) =>(
        <div className=" card trendCard" key={index} style={{backgroundImage:`url(${details.bgimage})`,}} data-aos="zoom-in-down" >
                <div className="overlay"></div>
                <div className="newsContent" style={{textAlign:'center', padding:'80px 20px', marginTop:'150px'}}>
                <h2>{details.cardHeader} </h2> 
                <p>{details.paragraph}</p>
                <button className='goherebtn' style={{textAlign:'center', justifyContent:'center'}} >
                    {details.cardbtn} <BsArrowRight />
                </button>
                </div>
        </div> 
            ))}

        </div>
    </div>
  )
}

export default Cardtemp