import React from 'react';

import './PageContent.css'

import NavBar from '../components/NavBar';
import Content from '../components/Content'

export default function PageContent() {
    return (
        <div className='page-content'>
            <NavBar/>
            <Content/>
        </div>
    )
}
