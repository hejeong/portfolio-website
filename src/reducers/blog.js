const initialState = {
    title: "",
    description: "",
    markdown: ""
}

export default (state=initialState, action) => {
    switch(action.type){
    case "UPDATE_BLOGPOST_FORM":
        return action.formData
    case "RESET_FORM":
        return Object.assign({}, state, initialState)
    default:
        return state
    }

}