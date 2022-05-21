import React from 'react';
import { Link } from 'react-router-dom';
import '../static/styles/navbar.css'

const Navbar = () => {
    return(
        <div className='nav-main'>
            <h1>Tom Briggs</h1>
            <div className='nav'>
                <Link className='nav-item' to="/">Home</Link>
                <Link className='nav-item' to="/about">About</Link>
                <Link className='nav-item' to="/blogs">Blogs</Link>
                <Link className='nav-item' to="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default Navbar;