import React, {Component} from 'react';

class NewProjectForm extends Component {
    constructor(){
        super()
        this.state={
            title: "",
            description: "",
            content: "",
            cover_image: ""
        }
    }
    handleOnSubmit = (event) => {
        event.preventDefault();
        fetch(`http://localhost:8000/api/projects/`, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                project: {...this.state}
            })
        })
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render(){
        return(<div>
            <form onSubmit={this.handleOnSubmit}>
                <h4>Add a new project</h4>
                <label>Title: </label>
                <input type="text" name="title" onChange={this.handleOnChange}/>
                <label>Description: </label>
                <input type="text" name="description" onChange={this.handleOnChange}/>
                <label>Content: </label>
                <input type="textarea" name="content" onChange={this.handleOnChange}/>
                <label>Thumbnail: </label>
                <input type="file" name="image" onChange={this.handleOnChange}/>
                <input type="submit" value="submit" />
                
            </form>
        </div>)
    }
}

export default NewProjectForm;