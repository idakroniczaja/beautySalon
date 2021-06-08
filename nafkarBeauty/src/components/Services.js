import React from 'react';


import './Services.css'

export default function Services({changeToServices}) {
    return (

            <div ref={changeToServices} className='content-wrapper services'>

                <h2>Services</h2>

                <div className='button-list'>
                <button>Nail Care</button>
                <button>Paraffin</button>
                <button>Massage</button>
                <button>Makeup</button>
                <button>Skincare</button>
                <button>Eyelashes and Brows</button>
                <button>Permanent Makeup</button>
                <button>Waxing</button>
                <button>Threading</button>
                <button>Hair Care</button>
                </div>
            </div>

    )
}
