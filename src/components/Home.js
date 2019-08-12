import React from 'react';
const Home = () => {
    return  <div>
        <section id="home-header">
            <div id="header-content">
                <h1 className="title">Jonathan Hong</h1>
                <h4 className="sub-title">Full Stack Web Developer</h4>
                <div className="links-container">
                <a href="/projects" >Projects</a>
                <p className="text-divider">  |  </p>
                <a href="#">Blog </a>  
                <p className="text-divider">  |  </p>
                <a href="#">Contact</a>
                </div>
            </div>
        </section>
        <section id="home-projects">
            <h1>Projects</h1>
        </section>
  </div>
}

export default Home;