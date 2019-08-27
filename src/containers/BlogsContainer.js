import React from 'react';
import { NavLink } from 'react-router-dom';
const BlogsContainer = () => {
    return <div>
        <NavLink to="/blog/new" >+ Create a Post</NavLink>
        
        <div className="inner-content">
        <ul className="blog-list">
            <BlogList posts={this.props.blogposts}/>
        </ul>
        </div>
    </div>
}

export default BlogsContainer;