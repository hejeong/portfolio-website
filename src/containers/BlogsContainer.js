import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import BlogList from '../components/BlogList';
const BlogsContainer = ({blogposts}) => {
    return <div>
        <NavLink to="/blog/new" >+ Create a Post</NavLink>
        
        <ul className="blog-list">
            <BlogList posts={blogposts}/>
        </ul>
    </div>
}

const mapStateToProps = (state)=>{
    return { 
        blogposts: state.blogPostsReducer.blogs,
    }
}
export default connect(mapStateToProps, null)(BlogsContainer);