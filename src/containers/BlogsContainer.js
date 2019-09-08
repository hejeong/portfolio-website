import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import BlogList from '../components/BlogList';
import { checkToken } from '../actions/adminLogin';

class BlogsContainer extends Component {

    componentDidMount(){
        const jwtToken = localStorage.getItem('token');
        if(!!jwtToken) {
            this.props.checkToken(jwtToken)
        }
    }
    render(){
        if(!this.props.loggedIn){
            return <div id="blog-container">
                    <div id="navbar" className="thin-roboto">
                        <h1>Jonathan Hong</h1>
                        <a href='/'>Home</a>
                        <a href="/projects">Projects</a>
                        <a href="/blogs">Blogs</a>
                        <a href="/about">About</a>
                    </div>
                    <div className="blog-wrapper">
                      <h1 className="recent roboto">Recent Posts:</h1>
                      <ul className="blog-list">
                          <BlogList posts={this.props.blogposts}/>
                      </ul>
                    </div>
                    <div className="blog-name-wrapper">
                      <h1 className="blog-name">MY BLOG TITLE</h1>
                    </div>
                </div>
        }
        return <div id="blog-container">
                    <div id="navbar" className="thin-roboto">
                            <h1>Jonathan Hong</h1>
                            <a href='/'>Home</a>
                            <a href="/projects">Projects</a>
                            <a href="/blogs">Blogs</a>
                            <a href="/about">About</a>
                            <NavLink to="/blog/new" className="new-project-button" >+ Create a Post</NavLink>
                    </div>
            
                    <div className="blog-wrapper">
                        <h1 className="recent roboto">Recent Posts:</h1>
                        <ul className="blog-list">
                            <BlogList posts={this.props.blogposts}/>
                        </ul>
                    </div>
                    <div className="blog-name-wrapper">
                        <h1 className="blog-name">MY BLOG TITLE</h1>
                    </div>
                </div>
    }
}

const mapStateToProps = (state)=>{
    return { 
        blogposts: state.blogPostsReducer.blogs,
        loggedIn: state.usersReducer.username
    }
}
export default connect(mapStateToProps, {checkToken})(BlogsContainer);