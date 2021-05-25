import React from 'react';

import './Header.css'

import Logo from './Logo';
import NavBar from './NavBar';
import Reservations from './Reservations';

export default function Header() {
    return (
        <div className='container'>
            <div className='header'>
            <Logo/>
            <NavBar/>
            <Reservations/>
            </div>
        </div>
    )
}
