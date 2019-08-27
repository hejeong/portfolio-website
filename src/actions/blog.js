export const updateBlogPostForm = formData => {
    return {
        type: "UPDATE_BLOGPOST_FORM",
        formData
    }
}

export const requestBlogData = () => {
    return {
        type: "REQUEST_BLOG_DATA"
    }
}

export const receiveBlogData = (blogData) => {
    return {
        type: "RECEIVE_BLOG_DATA",
        data: blogData
    }
}

export const getSpecificBlog = (postID) => {
    return {
        type: "GET_SPECIFIC_BLOG",
        postID
    }
}

export const resetTargetBlog= () => {
    return {
        type: "RESET_TARGET"
    }
}

export const fetchBlogData = () => {
    return dispatch => { 
        dispatch(requestBlogData())
       return fetch('http://localhost:8000/api/blogs')
       .then(resp => resp.json())
       .then(data => {
           dispatch(receiveBlogData(data))
       })
       .catch(error => console.log(error));
    }
}

export const publishPost = postData => {
    return dispatch => {
        let data = new FormData();
        data.append('blog[title]', postData.title)
        data.append('blog[description]', postData.description)
        data.append('blog[markdown]', postData.markdown)
        return fetch(`http://localhost:8000/api/blogs/`, {
            method: 'POST',
            body: data
        })
        .then(response => response.json())
        .then(data => {
            if(data.errors){
                //error
                alert(data.errors)
            }else {
                //success
                dispatch({type: "RESET_FORM"});
            }
        });
    }
}
