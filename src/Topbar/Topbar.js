import React from 'react';
import logo from './amazon.png'
import './topbar.css';

const Topbar = () => {
    return(
        <header>
            <nav className="topbar">
                <img src={logo} alt='Amazon Logo'></img>
            </nav>            
        </header>
    );
}


export default Topbar;