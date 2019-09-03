import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSpecificProject } from '../actions/project.js';

class Project extends Component {

    componentDidMount(){
        this.props.getSpecificProject(this.props.match.params.id)
    }

    render(){
        return(
        <div className="project-wrapper">
            <div id="navbar" className="thin-roboto background-dark">
                <h1>Jonathan Hong</h1>
                <a href='/'>Home</a>
                <a href="/projects">Projects</a>
                <a href="/blogs">Blogs</a>
                <a href="/about">About</a>
            </div>
            <div>
                <h1>{this.props.project.title}</h1>
                <img src={ this.props.project.cover_image } alt="college-textbooks-sinatra" className="project-img-show"/>
            </div>
        </div>)
    }
}

const mapStateToProps = (state) => {
    return { 
        project: state.projectsReducer.target
    }
}
export default connect(mapStateToProps, { getSpecificProject })(Project);