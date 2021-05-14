import React from 'react';
import NavBar from './NavBar';
import Content from './Content'

import './Background.css'

export default function Background() {
    return (

        <div className='background'>
        <NavBar content={<Content/>}/>
        <Content/>

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
