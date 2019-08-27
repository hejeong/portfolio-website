export const updateBlogPostForm = formData => {
    return {
        type: "UPDATE_BLOGPOST_FORM",
        formData
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
