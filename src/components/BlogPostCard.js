import React from 'react';
const BlogPostCard = ({post}) => {
    return <div className="card">
            <div className="container">
                <h3 className="post-title">{post.title}</h3>
                <p className="post-description">{post.description}</p>
            </div>
        </div>
}

export default BlogPostCard;