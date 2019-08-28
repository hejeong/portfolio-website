import React from 'react';
const BlogPostCard = ({post}) => {
    return <div className="">
            <div className="container">
                <h3 className="blog-card-title roboto">{post.title}</h3>
                <p className="blog-card-description thin-roboto">{post.description}</p>
            </div>
        </div>
}

export default BlogPostCard;