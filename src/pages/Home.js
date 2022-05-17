import React from 'react';
import {motion} from 'framer-motion';
import {aboutPageAnimation} from "../components/Animations.js"
import Homepage from '../components/Homepage.js';
import Currentwork from '../components/Currentwork.js';
import Futurework from '../components/Futurework.js';
import Desiredwork from '../components/Desiredwork.js';
import '../static/styles/home.css';

const Home = () => {
    return(
        <motion.div className="page-content" exit="exit" variants={aboutPageAnimation} initial='hidden' animate='show'>
            <Homepage />
            <Currentwork />
            <Futurework />
            <Desiredwork />
        </motion.div>
    )
}

export default Home;