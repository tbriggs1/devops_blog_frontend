import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import '../static/styles/footer.css'
import git from '../static/images/GitHub-Logo.wine.svg';
import discord from '../static/images/discord.svg';
import twitter from '../static/images/twitter.svg';

const Footer = () => {
    return(
        <div className='footer-main'>
            <h4 className='footer-title'>Thomas Briggs</h4>
            <div className='links'>
                <Link to='/'>Home</Link>
                <Link to='/blogs'>Blog</Link>
                <Link to='/contact'>Contact</Link>
            </div>
            <div className='footer'>
                <h5>Check out my social accounts: </h5>
                <a href='https://github.com/tbriggs1'><img src={git} width="60px"/></a>
                <a href='https://discord.gg/4EWYuyE8ZG'><img src={discord} width="60px"/></a>
                <a href='https://twitter.com/tomb252672'><img src={twitter} width="60px"/></a>
            </div>
        </div>
    )
}

export default Footer;