const initialState = {
    title: "",
    description: "",
    content: "",
    cover_image: null,
    projects: [],
    target: ""  
}

export default (state=initialState, action) => {
    switch(action.type){
    case "REQUEST_PROJECT_DATA":
        return state;
    case "RECEIVE_PROJECT_DATA":
        return Object.assign({}, state, { projects: action.data.projects})
    case "DELETE_POST_BY_ID":
        let index = -1;
        state.projects.find(function(post, i) {
            if(post.id == action.postID){
                index = i;
                return true;
            }
            return false;
        })
        state.projects.splice(index, 1);
        return Object.assign({}, state, { projects: state.projects})    
    case "UPDATE_PROJECT_FORM":
        return action.formData
    case "GET_SPECIFIC_PROJECT":
        const found = state.projects.find(function(project){
            return project.id == action.projectID
        })
        console.log(found)
        return Object.assign({}, state, {target: found})
    case "RESET_TARGET_PROJECT":
        return Object.assign({}, state, {target: ""})
    case "RESET_FORM":
        return Object.assign({}, state, initialState)
    default:
        return state
    }

}