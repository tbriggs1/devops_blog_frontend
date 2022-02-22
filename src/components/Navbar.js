import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
        <div>
            <h1>BlogLogo</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default Navbar;