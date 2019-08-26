const initialState = {
    title: "",
    description: "",
    content: "",
    cover_image: null
}

export default (state=initialState, action) => {
    switch(action.type){
    case "UPDATE_PROJECT_FORM":
        return action.formData
    case "RESET_FORM":
        return Object.assign({}, state, initialState)
    default:
        return state
    }

}