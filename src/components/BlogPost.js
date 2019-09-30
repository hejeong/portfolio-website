import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getSpecificBlog, resetTargetBlog} from '../actions/blog.js';
import ReactMarkdown from 'react-markdown';
import { NavLink } from 'react-router-dom';

class BlogPost extends Component {
    componentDidMount(){
        this.props.getSpecificBlog(this.props.match.params.id)
    }

    render(){
        if(!this.props.postData){
            return <div>
                Loading...
            </div>
        }
        return(
            <div>
                <div id="navbar" className="thin-roboto background-dark">
                    <h1>Jonathan Hong</h1>
                    <a href='/'>Home</a>
                    <a href="/projects">Projects</a>
                    <a href="/blogs">Blogs</a>
                    <a href="/about">About</a>
                    <NavLink to={'/blogs/' + this.props.match.params.id + '/edit'} className="new-project-button" >+ Edit</NavLink>
                </div>
                <div className="markdown-html">
                    <ReactMarkdown source={this.props.postData.markdown} className="markdown-html thin-roboto"/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        postData: state.blogPostsReducer.target
    }
}
export default connect(mapStateToProps, {getSpecificBlog, resetTargetBlog})(BlogPost);