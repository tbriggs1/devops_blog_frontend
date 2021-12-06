import React, { useRef } from 'react';
import About from './About';
import '../../styles/homepage.css'
import Info from './Info';

const Homepage = () => {
    const testRef = useRef(null);

    const testHandler = () => {
        console.log(testRef);
    }

    return(
        <div className="main_home">
            <Info />
            <About/>
            <div className="home_buttons">
                <button ref={testRef} onClick={testHandler}>Check out the Blog</button>
                <button>Contact me</button>
            </div>
        </div>
    )
}

export default Homepage;