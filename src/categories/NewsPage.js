import React, { useState, useEffect, useContext } from 'react'
import Navigation from '../sections/Navigation'
import { BsArrowRight } from "react-icons/bs";
import Footer from '../sections/Footer';
import BackToTop from '../accesories/BackTop';
import { DataContext } from '../App';
import { Link } from 'react-router-dom';


function NewsPage() {
    const category = useContext(DataContext)
    const [section, setSection] = useState([])
    const [visible, setVisible] = useState(4)
    const data = [
        {
            image:'platu.jpg',
            title:'Nigeria Youth League Cup confirmed Mighty Jet international and Plateau Jet SC ahead of league that will commence September 2024.'
        }
    ]
    useEffect(()=>{
        let feed = category.news;
        setSection(feed);
      }, [])
    if(!data) {
        return <div>Loading....</div>;
    }
  return (

    <div>
        <Navigation/>
        {section.slice(0, visible).map((data) => {
            return (
              <div>
                <div className='newspageCard'>
                <div className="npCardImg">
                {/* {data.images.slice(0, 2).map((pic) => {
                        return <img src={pic.pic} alt='' />;
                      })} */}
                      <img src={data.image} alt="" />
                </div>
                 <p> {data.title} </p>
                 <div className="npbtn">

            <Link to={`/news/${data.id}`} key={data.id}style={{textAlign:'center', justifyContent:'center', textDecoration:'none',color:'black'}}>
                <button className='goherebtn' style={{textAlign:'center', justifyContent:'center', textDecoration:'none',color:'black'}} >
                Read more <BsArrowRight />
                </button>
                </Link>
                </div>
                </div>
                <div className="loadMore">
                    
                </div>
              </div>
            );
          })}
        <BackToTop/>
        <Footer/>
    </div>
  )
}

export default NewsPage