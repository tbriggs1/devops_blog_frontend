import React from 'react';
import aws from '../static/images/aws.webp';
import python from '../static/images/python-205851.png';
import java from '../static/images/java.gif';
import flask from '../static/images/flask.png';
import spring from '../static/images/index.png';
import ansible from '../static/images/ansible.png';
import docker from '../static/images/docker.webp';
import git from '../static/images/git.png';
import jenkins from '../static/images/jenkins.jpg';
import react from '../static/images/react.png';
import vagrant from '../static/images/Vagrant.png';
import terraform from '../static/images/terraform.svg';
import { Carousel } from 'bootstrap';

const Currentwork = () => {
    return(
        <main>    
        <div>
            <h2>My Knowledge/Technologies</h2>
            <div className='knowledge-images'>
                <img src={aws}/>
                <img src={python} />
                <img src={java} />
                <img src={flask} />
                <img src={spring} />
                <img src={ansible} />
                <img src={docker} />
                <img src={git} />
                <img src={jenkins} />
                <img src={react} />
                <img src={vagrant} />
                <img src={terraform} />
            </div>
        </div>
    </main>
    )
}

export default Currentwork;

