import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import BlogList from '../components/BlogList';
const BlogsContainer = ({blogposts}) => {
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
                <BlogList posts={blogposts}/>
            </ul>
        </div>
        <div className="blog-name-wrapper">
            <h1 className="blog-name">MY BLOG TITLE</h1>
        </div>
    </div>
}

const mapStateToProps = (state)=>{
    return { 
        blogposts: state.blogPostsReducer.blogs,
    }
}
export default connect(mapStateToProps, null)(BlogsContainer);