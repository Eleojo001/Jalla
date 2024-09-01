import React from 'react'
import { BsArrowRight } from "react-icons/bs";


function CardData({heading, text, btn,bgimage,width,height,padding,textAlign,animationName,animationDuration}) {
  return (
    <div>
       <div className=" card_data" style={{backgroundImage:`url(${bgimage})`,width:`${width}`, height:`${height}`,padding:`${padding}`,}} >
                <div className="overlay"></div>
                <div className="cardContent" style={{textAlign:`${textAlign}`,}}>
                <h2 >{heading} </h2> 
                <p>{text}</p>
                <button className='goherebtn' style={{textAlign:'center', justifyContent:'center'}} >
                    {btn} <BsArrowRight />
                </button>
                </div>
        </div>  
    </div>
  )
}

export default CardData