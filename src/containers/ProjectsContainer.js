import React from 'react';
import ProjectsList from '../components/ProjectsList';
import {connect} from 'react-redux';
const ProjectsContainer = ({projects}) => {
    return<div id="projects-container">
            <div id="navbar" className="thin-roboto">
                <h1>Jonathan Hong</h1>
                <a href='/'>Home</a>
                <a href="/projects">Projects</a>
                <a href="/blogs">Blogs</a>
                <a href="/about">About</a>
                <a href="/projects/new" className="new-project-button">+ New Project</a>
            </div>
           
           <div id="project-list-container">
               <div className="project-list-content">
                <ul className="project-list">
                        <ProjectsList projects={projects} />
                    </ul>
               </div>
           </div>
        </div>
}

const mapStateToProps = (state) => {
    return{
        projects: state.projectsReducer.projects
    }
}

export default connect(mapStateToProps, null)(ProjectsContainer);