import React, {useState} from 'react';

import './Header.css'

import Logo from './Logo';
import NavBar from './NavBar';
import Reservations from './Reservations';

export default function Header() {
const [header,setHeader] = useState(false)

const changeBackground = () =>{
    // console.log(window.header)
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
            <NavBar/>
            <Reservations/>
            </div>
        </div>
    )
}
