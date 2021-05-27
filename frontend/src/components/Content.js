import React from 'react';

import './Content.css';

import Home from './Home'
import About from './About'
import Services from './Services'
import Gallery from './Gallery'
import Contact from './Contact'


import { faHotdog } from '@fortawesome/free-solid-svg-icons';



export default function Content() {
    return (
      
        <div className='container content'>

        <Home/>
        <About/>
        <Services/>
        <Gallery/>
        <Contact/>



            

        

        </div>
      
    )
}
