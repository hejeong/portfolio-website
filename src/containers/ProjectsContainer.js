import React from 'react';
import ProjectsList from '../components/ProjectsList';
import {connect} from 'react-redux';
const ProjectsContainer = ({projects}) => {
    return<div id="projects-container">
            <a href="/projects/new">New Project</a>
            <ul className="project-list">
                <ProjectsList projects={projects} />
            </ul>
        </div>
}

const mapStateToProps = (state) => {
    return{
        projects: state.projectsReducer.projects
    }
}

export default connect(mapStateToProps, null)(ProjectsContainer);