export const updateAdminLoginForm = (loginData) =>{
    return {
        type: "UPDATE_ADMIN_LOGIN_FORM",
        loginData
    }
}

export const login = loginData => {
    return dispatch => {
        let data = new FormData();
        data.append('admin[username]', loginData.username);
        data.append('admin[password]', loginData.password);
        return fetch(`http://localhost:8000/api/admin/`, {
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
