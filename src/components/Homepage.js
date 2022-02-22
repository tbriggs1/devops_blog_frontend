import React from 'react';
import awsImg from '../static/images/aws.webp'

const Homepage = () => {
    return (
        <main>
            <div>
                <h1> Welcome to my little space on the web! </h1>
                <h3>Here you will find blogs on all things DevOps and Cloud!</h3>
            </div>
            <div>
                <button>About me!</button>
                <button>The blog</button>
            </div>
            <img src={awsImg} height="200px" alt='learning'/>
            <div>
                <h2>Current skills</h2>
                <h3>Add images of crrent skills</h3>
            </div>
            <div>
                <h2>Currently Learning</h2>
                <h3>Add images of currently learnig</h3>
            </div>
            <div>
                <h2>Interested in</h2>
                <h3>Add logos of curently interested</h3>
            </div>
        </main>
    )
}

export default Homepage;