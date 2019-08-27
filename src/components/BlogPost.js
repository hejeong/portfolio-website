import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getSpecificBlog, resetTargetBlog} from '../actions/blog.js';
import ReactMarkdown from 'react-markdown';

class BlogPost extends Component {
    componentDidMount(){
        this.props.getSpecificBlog(this.props.match.params.id)
        console.log(this.props.postData)
    }
    componentWillUnmount(){
        this.props.resetTargetBlog()
    }
    render(){
        if(this.props.postData == ""){
            return <div>
                Loading...
            </div>
        }
        return(<div className="markdown-html">
            <ReactMarkdown source={this.props.postData.markdown} className="markdown-html thin-roboto"/>
        </div>)
    }
}

const mapStateToProps = (state) => {
    return {
        postData: state.blogPostsReducer.target
    }
}
export default connect(mapStateToProps, {getSpecificBlog, resetTargetBlog})(BlogPost);