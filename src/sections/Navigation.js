import React from 'react';
import { FaCircleUser } from "react-icons/fa6";
import CurrentDate from '../accesories/datetime';
import Dropdown from '../accesories/Dropdown';


function Navigation() {
    const options = [
        { label: 'News', href: '#' },
        { label: 'Radio', href: '#' },
        { label: 'Televisoin', href: '#' },
        { label: 'Presenter', href: '#' },
        { label: 'Podcast', href: '#' }
      ];
  return (
    <div className='navcontainer'>
        <div className="logo-icon">
            <div className="logo">
            <img src="favicon.ico" alt="" />
        </div>
        <div className="menuIcon">
        <Dropdown options={options}/>
        </div>
        </div>
        
        <div className="sigin-date">
        <div className="date">
            <div className="month">
                <CurrentDate/>
            </div>
        </div>
        <div className="signIn">
            <div className="user">
            <FaCircleUser size={"30px"} />
            <span>Sign In</span>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Navigation