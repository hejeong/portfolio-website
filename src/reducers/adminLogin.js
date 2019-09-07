const initialState=({
    username: "",
    password: ""
})

export default (state = initialState, action) => {
    switch(action.type){
        case "UPDATE_ADMIN_LOGIN_FORM":
            return Object.assign({}, state, {...action.loginData});
        case "RESET_FORM":
            return Object.assign({}, state, initialState)
        default:
            return state;
    }
}