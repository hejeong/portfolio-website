const initialState = {
    title: "",
    description: "",
    markdown: "",
    blogs: [],
    target: ""
}

export default (state=initialState, action) => {
    switch(action.type){
    case "REQUEST_BLOG_DATA":
        return state;
    case "RECEIVE_BLOG_DATA":
        return Object.assign({}, state, { blogs: action.data.blogs})
    case "UPDATE_BLOGPOST_FORM":
        return Object.assign({}, state, { ...action.formData})
    case "GET_SPECIFIC_BLOG":
        const found = state.blogs.find(function(post){
            return post.id == action.postID
        })
        return Object.assign({}, state, {target: found})
    case "RESET_TARGET":
        return Object.assign({}, state, {target: ""})
    case "RESET_FORM":
        return Object.assign({}, state, initialState)
    default:
        return state
    }

}