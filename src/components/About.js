import React from 'react';
import MyImage from '../assets/me.jpg';
const About = () => {
    return <div id="about">
         <div id="navbar" className="thin-roboto">
                <h1>Jonathan Hong</h1>
                <a href='/'>Home</a>
                <a href="/projects">Projects</a>
                <a href="/blogs">Blogs</a>
                <a href="/about">About</a>
        </div>
        <div id="about-info">
            <img src={ MyImage } alt="Jonathan Hong" className="profile-pic"/>
            <div className="profile-text">
                <p className="profile-title roboto black">Hi! My name is Jonathan Hong.</p>
                <p className="profile-desc thin-roboto">I am a multifaceted developer, currently pursuing a Bachelor's degree in Computer Engineering at Rutgers University. and a Full Stack Web Development experience from the Flatiron School.</p>
            </div>
        </div>
    </div>
}

export default About;