import React from 'react';
import {Link} from 'react-router-dom'



import './Gallery.css';
import Header from './Header'

export default function Gallery() {
    return (
        <section className='gallery'>
            <div className='grid-container'>
                <img src='/images/360_F_383811898_60mdCal4ST111MFuZaX0pSitjxtsUHxQ.jpg' />
                <img src='/images/anna-kumpan-3J5K-Jb6GRM-unsplash.jpg' />
                <img src='/images/damir-spanic-TrNithFZaho-unsplash.jpg' />
                <img src='/images/jessie-dee-dabrowski-www-jessiedee-net-W6cwaL7PMSw-unsplash.jpg' />
                <img src='/images/liubov-ilchuk-rXQTWJFPDn4-unsplash.jpg' />
                <img src='/images/paul-siewert-dnpa8k6TGRE-unsplash.jpg' />
                <img src='/images/1.jpg' />
                <img src='/images/karoline-soares-nCGA6m-Yl70-unsplash.jpg' />
                <img src='/images/how-to-get-healthy-hair-640x411.jpg' />
            </div>
        </section>
    

        
    )
}
