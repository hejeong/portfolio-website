export const updateProjectForm = formData => {
    return {
        type: "UPDATE_PROJECT_FORM",
        formData
    }
}

export const getSpecificProject = (projectID) => {
    return {
        type: "GET_SPECIFIC_PROJECT",
        projectID
    }
}

export const resetTargetProject = () => {
    return {
        type: "RESET_TARGET_PROJECT"
    }
}

export const requestProjectData = () => {
    return {
        type: "REQUEST_PROJECT_DATA"
    }
}

export const receiveProjectData = (projectData) => {
    return {
        type: "RECEIVE_PROJECT_DATA",
        data: projectData
    }
}
export const fetchProjectIndex = () => {
    return dispatch => { 
        dispatch(requestProjectData())
       return fetch('http://localhost:8000/api/projects')
       .then(resp => resp.json())
       .then(data => {
           dispatch(receiveProjectData(data))
       })
       .catch(error => console.log(error));
    }
}

export const createProject = projectData => {
    return dispatch => {
        let data = new FormData();
        data.append('project[cover_image]', projectData.cover_image);
        data.append('project[title]', projectData.title)
        data.append('project[description]', projectData.description)
        data.append('project[content]', projectData.content)
        return fetch(`http://localhost:8000/api/projects/`, {
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
