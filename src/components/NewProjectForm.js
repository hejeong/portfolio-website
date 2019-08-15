import React, {Component} from 'react';

class NewProjectForm extends Component {

    render(){
        return(<div>
            <form>
                <h4>Add a new project</h4>
                <label>Title: </label>
                <input type="text" />
                <label>Description: </label>
                <input type="text" />
                <label>Content: </label>
                <input type="textarea" />
                <input type="submit" value="submit" />
            </form>
        </div>)
    }
}

export default NewProjectForm;