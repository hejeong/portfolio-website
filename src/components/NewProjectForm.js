import React, {Component} from 'react';
import { connect } from 'react-redux';
import { updateProjectForm, createProject } from '../actions/project.js';
import ActiveStorageProvider from 'react-activestorage-provider'

const NewProjectForm = ({projectForm, updateProjectForm, createProject}) => {
  
    const handleInputChange = (event) => {
        const {name, value} = event.target
        const updateFormData = {
            ...projectForm,
            [name]: value
        }
        updateProjectForm(updateFormData)
    }

    const handleFile = event => {
        const file = event.target.files[0]
        const updateFormData = {
            ...projectForm,
            cover_image: file
        }
        updateProjectForm(updateFormData)
    }
    const handleSubmit = event => {
        event.preventDefault()
        createProject({...projectForm})
    }

    return(<div>
            <form onSubmit={handleSubmit}>
                <h4>Add a new project</h4>
                <label>Title: </label>
                <input type="text" name="title" value={projectForm.title} onChange={handleInputChange}/>
                <label>Description: </label>
                <input type="text" name="description" value={projectForm.description} onChange={handleInputChange}/>
                <label>Content: </label>
                <input type="textarea" name="content" value={projectForm.content} onChange={handleInputChange}/>
                <label>Thumbnail: </label>
                <input type="file" onChange={handleFile} />
                <input type="submit" value="submit" />              
            </form>
    </div>)
     
}

const mapStateToProps = (state) => {
    return { 
        projectForm: state.projectsReducer,
    }
}

export default connect(mapStateToProps, {updateProjectForm, createProject})(NewProjectForm);