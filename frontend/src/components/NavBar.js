import React, {useState} from 'react';
import {Link} from 'react-router-dom'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './NavBar.css'


export default function NavBar({active, setActive, goToHome, goToAbout, goToServices, goToContact}) {

    return (
        <nav>

        <ul>
            <li onClick={goToHome}><Link>Home</Link></li>
            <li onClick={goToAbout}><Link>About</Link></li>
            <li onClick={goToServices}><Link>Services</Link></li>
            <li onClick={()=>setActive(!active)}><Link >Gallery</Link></li>
            <li onClick={goToContact}><Link>Contact</Link></li>
        </ul>






        {/* <img src='/images/nafkar-logo.png' alt='nafkar logo'/>


            <ul className='nav-bar-full'>
               <button onClick={(e)=>setActive(e.target.innerText)}>About us</button>
               <button onClick={(e)=>setActive(e.target.innerText)}>Services</button>
               <button onClick={(e)=>setActive(e.target.innerText)}>Gallery</button>
               <button onClick={(e)=>setActive(e.target.innerText)}>Book online</button>
               <button onClick={(e)=>setActive(e.target.innerText)}>Contact us</button>
            </ul>
        

        
            <div className='hamburger__menu' onClick={()=>setToggle(!toggle)}>
            {bars}


             {toggle && 
             <ul className='nav-bar-drop' >
             <button onClick={(e)=>setActive(e.target.innerText)}>About us</button>
               <button onClick={(e)=>setActive(e.target.innerText)}>Services</button>
               <button onClick={(e)=>setActive(e.target.innerText)}>Gallery</button>
               <button onClick={(e)=>setActive(e.target.innerText)}>Book online</button>
               <button onClick={(e)=>setActive(e.target.innerText)}>Contact us</button>
             </ul>}

             </div> */}


             

        </nav>
    )
}
