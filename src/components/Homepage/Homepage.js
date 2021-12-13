import React from 'react';
import About from './About';
import '../../styles/homepage.css'
import Info from './Info';
import { Link } from "react-router-dom";

const Homepage = () => {
  
    return(
        <div className="main_home">
            <Info />
            <About/>
            <div className="home_buttons">
                <Link className="btn" to='/Blog'>Check out the Blog </Link>
                <button className="btn">Contact me</button>
            </div>
        </div>
    )
}

export default Homepage;