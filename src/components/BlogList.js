import React from 'react';
import {Link} from 'react-router-dom';
import BlogPostCard from './BlogPostCard';
const BlogList = ({posts}) => {
    return posts.map(post=>{
        return <li className="blog-list-item" key={post.id}>
            <Link className="blog-list-link" to={'/blogs/'+post.id}>
                <BlogPostCard post={post} />
            </Link>
            <hr className="line-break" />
        </li>
    })
}

export default BlogList;