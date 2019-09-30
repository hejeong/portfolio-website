import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSpecificProject, resetTargetProject } from '../actions/project.js';
import { NavLink } from 'react-router-dom';
import GithubIcon from '../assets/GitHub-Mark-Light-32px.png'; 
class Project extends Component {

    componentDidMount(){
        this.props.getSpecificProject(this.props.match.params.id)
    }
    componentWillUnmount(){
        this.props.resetTargetProject()
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
                <NavLink to={'/projects/' + this.props.match.params.id + '/edit'} className="new-project-button" >+ Edit</NavLink>
            </div>
            <div>
                <h1 className="project-title large-text center grey">{this.props.project.title}</h1> <br/>
                <img src={ this.props.project.cover_image } alt="college-textbooks-sinatra" className="project-img-show"/>
                <p className="project-show-content center roboto">{this.props.project.content}</p>
                <h2 className="roboto center padding-10">Walkthrough:</h2>
                <iframe className="project-walkthrough block center"  width="1120" height="630" src={this.props.project.walkthrough} title={this.props.project.title} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />
            </div>
        </div>)
    }
}

const mapStateToProps = (state) => {
    return { 
        project: state.projectsReducer.target
    }
}
export default connect(mapStateToProps, { getSpecificProject, resetTargetProject })(Project);