import React from 'react';
import {Link} from 'react-router-dom';
import BlogPostCard from './BlogPostCard';
const BlogList = ({posts}) => {
    return posts.map(post=>{
        return <li key={post.id}>
            <Link to={'/blog/'+post.id}>
                <BlogPostCard post={post} />
            </Link>
        </li>
    })
}

export default BlogList;