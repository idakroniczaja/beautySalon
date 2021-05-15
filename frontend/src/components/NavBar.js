import React, {useState} from 'react';
import {Link} from 'react-router-dom'

import './NavBar.css'


export default function NavBar({setActive}) {

    return (
        <nav>
        <img src='/images/nafkar-logo.png' alt='nafkar logo'/>
            <ul>
               <button onClick={(e)=>setActive(e.target.innerText)}>About us</button>
               <button onClick={(e)=>setActive(e.target.innerText)}>Services</button>
               <button onClick={(e)=>setActive(e.target.innerText)}>Gallery</button>
               <button onClick={(e)=>setActive(e.target.innerText)}>Book online</button>
               <button onClick={(e)=>setActive(e.target.innerText)}>Contact us</button>
            </ul>
        </nav>
    )
}
