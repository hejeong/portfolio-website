import React, {Component} from 'react';
import SimpleMDE from 'simplemde/dist/simplemde.min.js'
import 'simplemde/dist/simplemde.min.css'
import { updateBlogPostForm } from '../actions/blog.js';
import { connect } from 'react-redux';
class NewBlogPostForm extends Component {

    componentDidMount(){
        const simplemde = new SimpleMDE({ element: document.getElementById("blog-creator")})
        simplemde.codemirror.on('change', () => {
            const updateFormData = {
                ...this.props.blogPostForm,
                markdown: simplemde.value()
            }
            this.props.updateBlogPostForm(updateFormData)
          })
    }

    handleInputChange = (event) => {
        const {name, value} = event.target
        const updateFormData = {
            ...this.props.blogPostForm,
            [name]: value
        }
        this.props.updateBlogPostForm(updateFormData)
    }

    render(){
        return(
        <form className="blog-form">
            <h1 className="new-blog-label">Create new Blog Post</h1>
            <input type="text" name="title" placeholder="Title" className="blog-title roboto" onChange={this.handleInputChange}/> <br/>
            <input type="text" name="description" placeholder="Description" className="blog-description thin-roboto" onChange={this.handleInputChange} />
            <div className="markdown">
                <textarea id="blog-creator" />
            </div>
            <input type="submit" value="Publish" className="new-blog-submit thin-roboto"/>
        </form>)
    }
    
}
const mapStateToProps = (state) => {
    return { 
        blogPostForm: state.blogPostsReducer,
    }
}
export default connect(mapStateToProps, {updateBlogPostForm})(NewBlogPostForm);