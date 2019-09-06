import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getSpecificBlog, resetTargetBlog} from '../actions/blog.js';
import ReactMarkdown from 'react-markdown';

class BlogPost extends Component {
    componentDidMount(){
        this.props.getSpecificBlog(this.props.match.params.id)
    }
    componentWillUnmount(){
        this.props.resetTargetBlog()
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