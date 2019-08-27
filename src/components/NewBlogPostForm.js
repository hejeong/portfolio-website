import React, {Component} from 'react';
import SimpleMDE from 'simplemde/dist/simplemde.min.js'
import 'simplemde/dist/simplemde.min.css'

class NewBlogPostForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
    }

    componentDidMount(){
        const simplemde = new SimpleMDE({ element: document.getElementById("blog-creator")})
        simplemde.codemirror.on('change', () => {
            this.setState({
              value: simplemde.value()
            })
          })
    }

    render(){
        return(
        <form className="blog-form">
            <h1 className="new-blog-label">Create new Blog Post</h1>
            <input type="text" placeholder="Title" className="blog-title roboto"/> <br/>
            <input type="text" placeholder="Description" className="blog-description thin-roboto" />
            <div className="markup">
                <textarea id="blog-creator" />
            </div>
            <input type="submit" value="Publish" className="new-blog-submit thin-roboto"/>
        </form>)
    }
    
}

export default NewBlogPostForm;