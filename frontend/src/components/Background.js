import React, {useState} from 'react';
import NavBar from './NavBar';


import './Background.css'

import AboutUs from './AboutUs';
import Content from './Content';
import Services from './Services';
import Gallery from './Gallery';
import BookOnline from './BookOnline';
import ContactUs from './ContactUs'


// var object = {value: "value", timestamp: new Date().getTime()}
// localStorage.setItem("key", JSON.stringify(object));

const LOCAL_STORAGE_KEY = 'active';
export default function Background() {

    const [active, setActive] = useState('Content');

///to save value after refresh
// useEffect (()=>{
//     const savedContent = localStorage.getItem(LOCAL_STORAGE_KEY);
//    console.log(savedContent)
//      if (savedContent)   setActive(savedContent)

     

//      console.log(localStorage)
// },[])

//to set value of active content to home page automatically after 10 min
// useEffect (()=>{
//     setTimeout(function(){ setActive('Content') }, 60000);
// },[active])


//to set value to local storage

    // useEffect(()=>{
    //     localStorage.setItem(LOCAL_STORAGE_KEY, active)
    //     console.log(localStorage)
    // }, [active])




    return (

        <div className='background'>
        <NavBar setActive={setActive} />

        {active === 'About us' && <AboutUs />}
        {active === 'Services' && <Services />}
        {active === 'Gallery'  && <Gallery />}
        {active === 'Book online'  && <BookOnline />}
        {active === 'Contact us'  && <ContactUs />}
        {active === 'Content'  && <Content />}
       

        <div className='background-image'>
            <svg>
                <filter id='turbulence' x='0' y='0' width='100%' height='100%'>
                    <feTurbulence id='sea-filter' numOctaves='3' seed='6' baseFrequency='0.02 0.05'></feTurbulence>
                    <feDisplacementMap scale='5' in='SourceGraphic'></feDisplacementMap>
                    <animate xlinkHref='#sea-filter' attributeName='baseFrequency' dur='10s' keyTimes='0;0.5;1' values='0.02 0.06;0.04 0.08;0.02 0.06' repeatCount='indefinite'></animate>
                </filter>
            </svg>
        </div>

        </div>

    

    )
}
