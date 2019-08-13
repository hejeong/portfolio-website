import React from 'react';
import MyImage from '../assets/me.jpg';
const About = () => {
    return <div id="about">
        <header className="navbar"><a href="/" className="navlink">Home</a></header>
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