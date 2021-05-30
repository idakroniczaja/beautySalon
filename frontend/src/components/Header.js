import React, {useState} from 'react';

import './Header.css'

import Logo from './Logo';
import NavBar from './NavBar';
import Reservations from './Reservations';

export default function Header({active, setActive, goToHome, goToAbout, goToServices, goToContact}) {

const [header,setHeader] = useState(false)

const changeBackground = () =>{

    if(window.scrollY>=316){
        setHeader(true)
    }else{
        setHeader(false)
    }
}


window.addEventListener('scroll', changeBackground)

    return (
        <div className='container'>
            <div className={header ? 'header active' : 'header'}>
            <Logo/>
            <NavBar active={active} setActive={setActive} goToHome={goToHome} goToAbout={goToAbout} goToServices={goToServices} goToContact={goToContact}/>
            <Reservations/>
            </div>
        </div>
    )
}
