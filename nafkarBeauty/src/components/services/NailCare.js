import React, { useEffect, useState } from 'react';

import sanityClient from '../../client.js'


export default function NailCare() {
    const [nailcare, setNailCare] = useState(null)

    

    return (
    <div className='service-box' >
            <div className="service-box-info">
                <h4>Callus removal</h4>
                <p className='price'>$10.00</p>
            </div>
            <div className="service-box-info">
                <h4>russian pedicure</h4>
                <p className='price'>$60.00</p>
            </div>
            <div className="service-box-info">
                <h4>Russian mani/pedi</h4>
                <p className='price'>$80.00</p>
            </div>
            <div className="service-box-info">
                <h4>Manicure and Pedicure</h4>
                <p className='price'>$62.00</p>
            </div>
            <div className="service-box-info">
                <h4>Callus removal</h4>
                <p className='price'>$10.00</p>
            </div>
    </div>
    )
}
