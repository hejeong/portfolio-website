import React, {Component} from 'react';
import SimpleMDE from 'simplemde/dist/simplemde.min.js'
import 'simplemde/dist/simplemde.min.css'
import { updateBlogPostForm, publishPost } from '../actions/blog.js';
import { connect } from 'react-redux';
import { checkToken } from '../actions/adminLogin';
import { Redirect } from 'react-router';

class NewBlogPostForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            redirect: false
        }
    }
    componentDidMount(){
        const jwtToken = localStorage.getItem('token');
        console.log(jwtToken)
        if(!!jwtToken) {
            
            this.props.checkToken(jwtToken)
        }
        const simplemde = new SimpleMDE({ element: document.getElementById("blog-creator")})
        simplemde.codemirror.on('change', () => {
            const updateFormData = {
                ...this.props.blogPostForm,
                markdown: simplemde.value()
            }
            this.props.updateBlogPostForm(updateFormData)
          })
    }

    setRedirect = () => {
        this.setState({redirect: true})
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
        this.props.publishPost(this.props.blogPostForm, this.setRedirect)
    }

    render(){
        if(!this.props.loggedIn){
            return <Redirect to='/' />
        }
        if(!!this.state.redirect){
            return <Redirect to='/blogs' />
        }
        return(
        <form className="blog-form" onSubmit={this.handleOnSubmit}>
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
        loggedIn: state.usersReducer.username
    }
}
export default connect(mapStateToProps, {checkToken, updateBlogPostForm, publishPost})(NewBlogPostForm);