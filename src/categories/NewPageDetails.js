import React, { useState, useEffect, useContext } from 'react'
import Navigation from '../sections/Navigation'
import Footer from '../sections/Footer'
import { DataContext } from '../App';
import { Link,useParams,useNavigate } from 'react-router-dom';
import { BsArrowLeft, BsArrowRight,BsDot } from "react-icons/bs";
import ImageSlider from '../accesories/ImageSlider';


function NewPageDetails() {
    const category = useContext(DataContext);
  let data = category.news;
  const { id } = useParams();
  const navigate = useNavigate();


  return (
    <div>
        <Navigation/>
        <div className="newsDetailsHolder">
            <div>
            {data.map((item) => {
            if (item.id == id) {
              return (
                <div key={item.id}>
                  <h1 className=''>{item.title}</h1>

                  <p className=''>
                    {item.author} <BsDot size={'1rem'} />{' '}
                    <span>{item.date}</span>
                  </p>
                  <div className=''>
                    <div className=''>
                    <ImageSlider images={item.images} />
                      
                    </div>
                  </div>
                  {item.content.split('\n').map((paragraph, index) => (
                    <p
                      key={index}
                      className=''
                      style={{ fontSize: '18px', lineHeight: '1.5' }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              );
            }
          })}
            </div>
            
                <button className='goherebtn npbtn' style={{textAlign:'center', justifyContent:'center', textDecoration:'none',color:'black', display:'flex'}} button onClick={() => navigate(-1)}  >
                Go back <BsArrowLeft />
                </button>
                
        </div>
        {/* <button>Hello</button> */}
        <Footer/>
    </div>
  )
}

export default NewPageDetails