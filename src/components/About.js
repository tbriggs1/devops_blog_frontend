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
            </div>
            <div className='about-me'>
                    <h4>Hey, I'm Tom!</h4>
                    <p>I'm currently working as a DevOps engineer for a UK based company, working on both Greenfield and large scale projects. After completing my
                        MSc in Computer Science in 2019, I've gone on to work as both a Software Engineer and a DevOps Engineer. My first role was working as an AWS DevOps engineer, using 
                        automation and configuration tools such as Ansbile, Terraform, Docker, Vagrant, and Jenkins. I also gained valuable experience writing scripts in Python and working
                        with the Flask framework. From there, I went onto work for a company that specialises within the SAP cloud enviornment, where I worked as a mixture between a DevOps
                        Engineer, creating pipelines within Jenkins, managing resources in AWS, and a Software Engineer...building full-stack applications where I explored developing apps
                        for Microsoft teams. Now I've landed at my current company, working as a DevOps consultant, working with current tech trends such as Serverless, Lambda etc...</p>
                    <p>When I'm not sat at my desk looking at a computer screen, I enjoy the great outdoors. Having a custom made campervan, sea fishing kayaks, bicycles, and
                        a trusty pair of walking boots...I'm always chasing the adventure! 
                    </p>
                    <p>I'm currently working on a few personal projects to upskills and work on my craft, as well as frequently writing blogs. If you'd like to chat about absolutely anything
                        please feel free to contact me, I'm always up for a friendly chat with like-minded people! If you'd like to help with any projects or looking for any support
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