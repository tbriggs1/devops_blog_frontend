import React from 'react'

import kayak from '../static/images/kayking.jpg';
import walk from '../static/images/walk.jpg';
import van from '../static/images/van.jpg';
import chill from '../static/images/chill.jpg'

import '../static/styles/about.css';

const About = () => {
    return (
        <div>
            <div className='about'>
                <div className='text-section'>
                    <h3>Hi I'm Tom!</h3>
                    <p>Here's a little picture of me floating in the sea admiring a bird!
                       Found out more about me below!</p>
                </div>
                <div className='img-section'>
                    <img src={kayak} width="300px"/>
                </div>
            </div>
            <div className='about-me'>
                    <h4>About me</h4>
                    <p>I'm currently working as a DevOps engineer for a UK based company, working on both Greenfield and large scale projects. After completing my
                        MSc in Computer Science in 2019, I've gone on to work as both a Software Engineer and a DevOps Engineer. My main area of interest is within the cloud,
                        keeping up to date with current trends and exploring new technologies.</p>
                    <p>When I'm not sat at my desk looking at a computer screen, I enjoy the great outdoors. Having a custom made campervan, sea fishing kayaks, bicycles, and
                        a trusty pair of walking boots...I'm always chasing the adventure! 
                    </p>
                    <p>I'm currently working on a few personal projects to upskills and work on my craft, as well as frequently writing blogs. If you'd like to chat about anything
                        please feel free to contact me, I'm always up for a friendly chat with like-minded people! If you'd like to help with any projects or looking for any supports
                        to further your technical career, please do reach out!
                    </p>
            </div>
            <div className='about-images'>
                <img className='img1' src={chill} width='300px' />
                <img className='img2' src={walk} width='300px'/>
                <img className='img3' src={van} width='300px'/>
            </div>
        </div>
    )
}

export default About;