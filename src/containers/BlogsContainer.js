import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
const BlogsContainer = () => {
    return <div>
        <NavLink to="/blog/new" >+ Create a Post</NavLink>
        
        <ul className="blog-list">
            <BlogList posts={this.props.blogposts}/>
        </ul>
    </div>
}

const mapStateToProps = (state)=>{
    return { 
        blogposts: state.blogPostsReducer,
    }
}
export default connect(mapStateToProps, null)(BlogsContainer);