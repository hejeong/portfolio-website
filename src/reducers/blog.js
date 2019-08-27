const initialState = {
    title: "",
    description: "",
    markdown: "",
    blogs: []
}

export default (state=initialState, action) => {
    switch(action.type){
    case "REQUEST_BLOG_DATA":
        return state;
    case "RECEIVE_BLOG_DATA":
        return Object.assign({}, state, { blogs: action.data.blogs})
    case "UPDATE_BLOGPOST_FORM":
        return Object.assign({}, state, { ...action.formData})
    case "RESET_FORM":
        return Object.assign({}, state, initialState)
    default:
        return state
    }

}