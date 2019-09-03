import React from 'react';
import SinatraTextbooks from '../assets/sinatra-college-textbooks.png';
import RunnersWeekly from '../assets/runners-weekly.png';
const Home = () => {
    return  <div>
        <section id="home-header">
            <div id="header-content">
                <h1 className="title">Jonathan Hong</h1>
                <h4 className="sub-title">Full Stack Web Developer</h4>
                <div className="links-container">
                    <a href="/projects" >Projects</a>
                    <p className="text-divider">  |  </p>
                    <a href="/blogs/">Blog</a>
                    <p className="text-divider">   |  </p>
                    <a href="/about">About</a>
                </div>
            </div>
        </section>
        <section id="home-projects">
            <div id="top-projects">
                <h1>Web Development Projects</h1>
                <div className="project clearfix"> 
                    <div className="project-text float-left left-item">
                        <p className="project-title">Sinatra Textbooks</p>
                        <p className="project-desc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                    <img src={ SinatraTextbooks } alt="college-textbooks-sinatra" className="medium-img float-left right-item"/>
                </div>
                <div className="project clearfix"> 
                    <img src={ RunnersWeekly } alt="college-textbooks-sinatra" className="medium-img float-left left-item"/>
                    <div className="project-text float-left right-item">
                        <p className="project-title">RunnersWeekly</p>
                        <p className="project-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis sagittis ipsum tincidunt porttitor. Quisque iaculis in mauris quis eleifend. Cras in consequat mi. Etiam maximus libero eu vulputate malesuada. In et magna et mauris vestibulum dictum efficitur ac orci. Quisque congue auctor mi, placerat blandit neque vestibulum a. Pellentesque eleifend orci sit amet odio venenatis sollicitudin a vitae ipsum. Phasellus venenatis arcu sed ante sollicitudin, et varius sem consectetur. Nulla eget ornare enim. Duis in condimentum nibh.</p>
                    </div>
                </div>
               
            </div>
        </section>
        <section id="home-food">
        </section>
        <section id="footer">
            Contact
        </section>
  </div>
}

export default Home;