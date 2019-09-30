import React, {Component} from 'react';
import { connect } from 'react-redux';
import { updateProjectForm, createProject } from '../actions/project.js';
import { checkToken } from '../actions/adminLogin';
import { Redirect } from 'react-router';

class EditProjectForm extends Component{
    componentDidMount(){
        /*const jwtToken = localStorage.getItem('token');
        if(!!jwtToken) {
            this.props.checkToken(jwtToken)
        }*/
        const initialFormData = {
            title: this.props.projectForm.title,
            description: this.props.projectForm.description,
            content: this.props.projectForm.content,
            walkthrough: this.props.projectForm.walkthrough
        }
        this.props.updateProjectForm(initialFormData)
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
        this.props.submitProjectEdit(this.props.projectForm, this.props.match.params.id)
    }
    setRedirect = () => {
        this.setState({redirect: true})
    }

    handleOnClickDelete=(event) => {
        this.props.deleteProject(this.props.match.params.id, this.setRedirect);
    }

    render(){
        if(localStorage.getItem('jon-username') != 'hejeong'){
            return <Redirect to='/'/>
        }
        return(<div>
                <form onSubmit={this.props.handleSubmit}>
                    <h4>Add a new project</h4>
                    <label>Title: </label>
                    <input type="text" name="title" value={this.props.projectForm.title} onChange={this.props.handleInputChange}/>
                    <label>Description: </label>
                    <input type="text" name="description" value={this.props.projectForm.description} onChange={this.props.handleInputChange}/>
                    <label>Content: </label>
                    <textarea name="content" value={this.props.projectForm.content} onChange={this.props.handleInputChange}/>
                    <label>Walkthrough: </label>
                    <input type="text" name="walkthrough" value={this.props.projectForm.walkthrough} onChange={this.props.handleInputChange}/>
                    <label>Thumbnail: </label>
                    <input type="file" onChange={this.props.handleFile} />
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

export default connect(mapStateToProps, {checkToken, updateProjectForm, submitProjectEdit, deleteProject})(EditProjectForm);