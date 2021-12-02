import React from 'react';
import About from './About';
import '../../styles/homepage.css'
import Info from './Info';

const Homepage = () => {
    return(
        <div className="main_home">
            <Info />
            <About/>
            <div className="home_buttons">
                <btn>Check out the Blog</btn>
                <btn>Contact me</btn>
            </div>
        </div>
    )
}

export default Homepage;