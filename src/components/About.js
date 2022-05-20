import React from 'react'

import kayak from '../static/images/kayking.jpg';
import kayking from '../static/images/kayaking.jpg';
import van from '../static/images/van.jpg';

import '../static/styles/about.css';

const About = () => {
    return (
        <div>
            <div className='about'>
                <div className='text-section'>
                    <h3>Hi I'm Tom!</h3>
                    <h5>I'm a DevOps Engineer by trade, with a passion for everything technnology!</h5>
                    <h5>Found out more about me below!</h5>
                </div>
                <div className='img-section'>
                    <img src={kayak} width="400px"/>
                </div>
            </div>
        </div>
    )
}

export default About;