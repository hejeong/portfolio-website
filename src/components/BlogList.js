import React from 'react';
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