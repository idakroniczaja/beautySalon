import React, {useState}from 'react';

import './Content.css';

import Home from './Home'
import About from './About'
import Services from './Services'
import Gallery from './Gallery'
import Contact from './Contact'


import { faHotdog } from '@fortawesome/free-solid-svg-icons';



export default function Content() {

const [active, setActive] = useState(false)


    return (
 
      
        <div className='container content'>
  {/* { console.log(click)} */}
        <Home/>
        <About/>
        <Services/>
        <Gallery />
        <Contact/>

        </div>
      
    )
}
