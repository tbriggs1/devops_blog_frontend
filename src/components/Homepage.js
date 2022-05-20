import React from 'react';
import {motion} from 'framer-motion';
import {fade} from '../components/Animations.js';
import {UseScroll} from '../components/Scroll.js';
import { Link } from 'react-router-dom';

const Homepage = () => {
    const [element, controls] = UseScroll();
    return (
        <motion.div className="main-content" >
          <section className="about-section">
              <motion.div className="info" variants={fade} animate={controls} initial="hidden" ref={element}>
                <h1> Welcome to my little space on the web! </h1>
                <h3>Here you will find blogs on all things DevOps and Cloud!</h3>
              </motion.div>
              <div className='about-buttons'>
                <Link to={'/about'}><button>About Me</button></Link>
                <Link to={'/blogs'}><button>The Blog</button></Link>
              </div>
          </section>
       </motion.div>
    )
}

export default Homepage;


