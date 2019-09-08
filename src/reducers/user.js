const initialState = {
    username: ""
}

export default (state=initialState, action) => {
    switch(action.type){
        case "SET_CURRENT_USERNAME":
            return Object.assign({}, state, { username: action.username})
        case "LOGOUT":
            return Object.assign({}, state, {username: ""})
        default:
            return state;
    }
}