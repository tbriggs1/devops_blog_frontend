import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return(
        <nav className='navbar'>
            <h1 className='blog-title'> Tom's Blog </h1>
            <Link className='nav-btn' to='/'>Home</Link>
            <Link className='nav-btn' to='/Blog'>Blog</Link>
            <Link className='nav-btn' to='/Contact'>Contact</Link>
        </nav>
        
    )
}

export default NavBar;