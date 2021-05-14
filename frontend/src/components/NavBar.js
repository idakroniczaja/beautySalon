import React, {useState} from 'react';
import {Link} from 'react-router-dom'

import './NavBar.css'

import AboutUs from './AboutUs';
import Content from './Content'

export default function NavBar() {

//  const [layout, setLayout] = useState(content)




    return (
        <nav>
        <img src='/images/nafkar-logo.png' alt='nafkar logo'/>
            <ul>
               <Link to='/about-us'><button onClick={()=>console.log('d')}>About us</button></Link> 
               <Link to='/about-us'><li>Services</li></Link> 
               <Link to='/about-us'><li>Gallery</li></Link>
               <Link to='/about-us'><li>Book online</li></Link>
               <Link to='/about-us'><li>Contact us</li></Link>
            </ul>
        </nav>
    )
}
