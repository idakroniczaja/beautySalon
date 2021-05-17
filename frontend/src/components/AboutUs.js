import React from 'react';

import './AboutUs.css'

export default function AboutUs() {
    return (

        <section className='about-us'>

        <div className='history'>
        <div className='history-content'>
            <div className='history-text'>
                <h1>WELCOME</h1>
                <h2>to Nafkar beauty!</h2>
                <p>Founded in [year] by [founder name], Nafkar beauty has come a long way from 
                    its beginnings in [starting location]. When [founder name] first started out,
                    [his/her/their] passion for [brand message - e.g. "eco-friendly cleaning products"]
                    drove them to start their own business.</p> 
            </div>

            <div >
                <img src='/images/liubov-ilchuk-rXQTWJFPDn4-unsplash.jpg' />
            </div>
        </div>

            

            <div className='background'></div>
            
        </div>

        <div className='introduction'>
            <div className='intro-content'>
            <div>
                            <img src='/images/pexels-elly-fairytale-3865712.jpg'/>
                    </div>

                    <div className='introduction-text'>
                        <p>Our experience and quality have distinguished us for more than 10 years 
                        in aesthetic needs from head to toe. Now in a new location in a cool and sunny
                        environment. Our European qualification, training, and our dedication to 
                        providing the best service to our clients are what makes us one of the most desired
                        estheticians/technician/artists in Miami.</p>
                        <p>
                        We hope you enjoy our products as much as we enjoy offering them to you. 
                        If you have any questions or comments, please don't hesitate to contact us.
                        </p>
                        <p>
                        Sincerely,
                            your Nafkar beauty.
                        </p>
                    </div>
            </div>
            

        <div className='background'></div>

        
            
        </div>
        
        </section>

    )
}
