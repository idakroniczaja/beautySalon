import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


import './Reservations.css'

export default function Reservations() {
    return (
        <div>
            <FontAwesomeIcon icon={faPhone} className='icon'/>
            <div className='reservations'>
                <p>RESERVATIONS - (786) 395-8506</p>
            </div>
        </div>
        
    )
}
