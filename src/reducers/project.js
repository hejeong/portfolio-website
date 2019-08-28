const initialState = {
    title: "",
    description: "",
    content: "",
    cover_image: null,
    projects: []
}

export default (state=initialState, action) => {
    switch(action.type){
    case "REQUEST_PROJECT_DATA":
        return state;
    case "RECEIVE_PROJECT_DATA":
        return Object.assign({}, state, { projects: action.data.projects})
    case "UPDATE_PROJECT_FORM":
        return action.formData
    case "RESET_FORM":
        return Object.assign({}, state, initialState)
    default:
        return state
    }

}