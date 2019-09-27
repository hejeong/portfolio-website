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
        return fetch(`https://jonhong-website-api.herokuapp.com/auth/admin/login`, {
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
                localStorage.setItem('token', data.jwt);
                dispatch({type: "SET_CURRENT_USERNAME", username: data.user.username})
                dispatch({type: "RESET_FORM"});
            }
        });
    }
}


export const checkToken = token => {
    return dispatch => {
        let data = new FormData();
        data.append('token', token);
        return fetch('https://jonhong-website-api.herokuapp.com/auth/admin/jwt/token', {
            method: 'POST',
            body: data
        })
        .then(response => response.json())
        .then(data => {
            if(data.errors){
               console.log(data.errors)
            }else{
                dispatch({type: "SET_CURRENT_USERNAME", username: data.user.username})
            }
        })
        .catch(error=>console.log(error))
    }
}