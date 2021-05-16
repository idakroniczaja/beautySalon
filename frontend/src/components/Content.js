import React from 'react';
import {Flip, Zoom}  from 'react-reveal';
import './Content.css';



export default function Content() {
    return (
      
        <div className='content'>

            <h1>Your best <br/><span>beauty ritual</span></h1>

            <p>
            <span>THE MOMENTS YOU DESERVE ONLY FOR YOU.</span> Escape from everyday busy reality and treat yourselfe with intensive care. 
            Beauty and health go hand in hand. The combination of quality cosmetics and state-of-the-art aesthetic technologies creates an irresistible combination that leaves the skin soft, supple and nourished.
            </p>

            <div className='images'>
                <img src='/images/toa-heftiba-hBLf2nvp-Yc-unsplash.jpg' alt='' width='25%'/>
                <img src='/images/juja-han-Z8-6EI2tYtw-unsplash.jpg' alt='nafkar logo' width='25%'/>
                <img src='/images/1111.jpg' alt='nafkar logo' width='25%'/>
                <img src='/images/tommy-van-kessel-_tnkR2gu3kw-unsplash.jpg' alt='nafkar logo' width='25%'/>
            </div>

        </div>
      
    )
}
