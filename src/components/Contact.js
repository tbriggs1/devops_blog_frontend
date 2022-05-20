import React, { useRef } from 'react';

import git from '../static/images/GitHub-Logo.wine.svg';
import discord from '../static/images/discord.svg';
import twitter from '../static/images/twitter.svg';
import email from '../static/images/email.png';
import linkedin from '../static/images/linkin.svg';
import phone from '../static/images/phone.svg';
import ContactForm from './ContactForm';

import '../static/styles/contact.css'

const Contact = () => {

  return (
    <main className='contact'>
        <div className='contact-title'>
            <h2>Get in Touch!</h2>
            <p>Please feel free to reach out if you have any questions about the blog, any improvements you feel I could make, or if you would just like a chat!</p>
        </div>
        <div className='contact-grid'>
            <div className='contact-left'>
                <h4>Social Accounts</h4>
                <div>
                    <div className='phone'>
                        <img src={phone} width="60px"/>
                        <p>+44 7709 948514</p>
                    </div>
                    <div className='email'>
                        <img src={email} width="60px"/>
                        <p>tomb1234@hotmail.co.uk</p>
                    </div>
                </div>    
                <div className='social-icons'>
                    <a href='https://github.com/tbriggs1'><img src={git} width="60px"/></a>
                    <a href='https://twitter.com/tomb252672'><img src={twitter} width="60px"/></a>
                    <a href='https://linkedin.com/in/tom-briggs-23570a206/'><img src={linkedin} width="60px"/></a>
                </div>
            </div>
            <div className='contact-right'>
                <ContactForm />
            </div>
        </div>
    </main>
  );
};

export default Contact;