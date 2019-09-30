import React, {Component} from 'react';
import SimpleMDE from 'simplemde/dist/simplemde.min.js'
import 'simplemde/dist/simplemde.min.css'
import { updateBlogPostForm, submitPostEdit, deletePost } from '../actions/blog.js';
import { connect } from 'react-redux';
import { checkToken } from '../actions/adminLogin';
import { Redirect } from 'react-router';

class EditBlogPostForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            redirect: false
        }
    }

    componentDidMount(){
        /*const jwtToken = localStorage.getItem('token');
        if(!!jwtToken) {
            this.props.checkToken(jwtToken)
        }*/
        const initialFormData = {
            title: this.props.postData.title,
            description: this.props.postData.description
        }
        this.props.updateBlogPostForm(initialFormData);
        const simplemde = new SimpleMDE({ element: document.getElementById("blog-creator")})
        simplemde.value(this.props.postData.markdown);
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

    handleOnSubmit = (event) => {
        event.preventDefault();
        this.props.submitPostEdit(this.props.blogPostForm, this.props.match.params.id)
    }
    setRedirect = () => {
        this.setState({redirect: true})
    }

    handleOnClickDelete=(event) => {
        this.props.deletePost(this.props.match.params.id, this.setRedirect);
    }

    render(){
        if(localStorage.getItem('jon-username') != 'hejeong'){
            return <Redirect to='/' />
        }
        if(!!this.state.redirect){
            return <Redirect to='/blogs' />
        }
        return(
        <form className="blog-form" onSubmit={this.handleOnSubmit}>
            <h1 className="new-blog-label">Edit Blog Post</h1>
            <input type="text" name="title" placeholder="Title" className="blog-title roboto" value={this.props.blogPostForm.title} onChange={this.handleInputChange}/> <br/>
            <input type="text" name="description" placeholder="Description" className="blog-description thin-roboto" value={this.props.blogPostForm.description} onChange={this.handleInputChange} />
            <div className="markdown">
                <textarea id="blog-creator" />
            </div>
            <button onClick={this.handleOnClickDelete}>Delete</button>
            <input type="submit" value="Update" className="new-blog-submit thin-roboto"/>
        </form>)
    }
    
}
const mapStateToProps = (state) => {
    return { 
        blogPostForm: state.blogPostsReducer,
        postData: state.blogPostsReducer.target,
        loggedIn: state.usersReducer.username,
    }
}
export default connect(mapStateToProps, {checkToken, updateBlogPostForm, submitPostEdit, deletePost})(EditBlogPostForm);