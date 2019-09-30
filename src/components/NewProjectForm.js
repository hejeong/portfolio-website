import React, {Component} from 'react';
import { connect } from 'react-redux';
import { updateProjectForm, createProject } from '../actions/project.js';
import { checkToken } from '../actions/adminLogin';
import { Redirect } from 'react-router';

class NewProjectForm extends Component{
    componentDidMount(){
        /*const jwtToken = localStorage.getItem('token');
        if(!!jwtToken) {
            this.props.checkToken(jwtToken)
        }*/
    }
    handleInputChange = (event) => {
        const {name, value} = event.target
        const updateFormData = {
            ...this.props.projectForm,
            [name]: value
        }
        this.props.updateProjectForm(updateFormData)
    }

    handleFile = event => {
        const file = event.target.files[0]
        const updateFormData = {
            ...this.props.projectForm,
            cover_image: file
        }
        this.props.updateProjectForm(updateFormData)
    }
    handleSubmit = event => {
        event.preventDefault()
        this.props.createProject({...this.props.projectForm})
    }

    render(){
        if(localStorage.getItem('jon-username') != 'hejeong'){
            return <Redirect to='/'/>
        }
        return(<div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a new project</h4>
                    <label>Title: </label>
                    <input type="text" name="title" value={this.props.projectForm.title} onChange={this.handleInputChange}/>
                    <label>Description: </label>
                    <input type="text" name="description" value={this.props.projectForm.description} onChange={this.handleInputChange}/>
                    <label>Content: </label>
                    <textarea name="content" value={this.props.projectForm.content} onChange={this.handleInputChange}/>
                    <label>Thumbnail: </label>
                    <input type="file" onChange={this.handleFile} />
                    <input type="submit" value="submit" />              
                </form>
        </div>)
    }
    
}

const mapStateToProps = (state) => {
    return { 
        projectForm: state.projectsReducer,
        loggedIn: state.usersReducer.username

    }
}

export default connect(mapStateToProps, {checkToken, updateProjectForm, createProject})(NewProjectForm);