export const setCurrentUser = (username) => {
    return {
        type: "SET_CURRENT_USERNAME",
        username
    }
}

export const logout = () => {
    return {
        type: "LOGOUT"
    }
}