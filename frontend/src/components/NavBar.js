import React, {useState} from 'react';
import {Link} from 'react-router-dom'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import './NavBar.css'


export default function NavBar({setActive}) {

const [toggle, setToggle]=useState(false)



    return (
        <nav>
{console.log(toggle)}
        <ul>
            <li><Link>Home</Link></li>
            <li><Link>About</Link></li>
            <li><Link>Services</Link></li>
            <li onClick={()=>setToggle(!toggle)}><Link >Gallery</Link></li>
            <li><Link>Contact</Link></li>
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
