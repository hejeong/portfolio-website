export const updateProjectForm = formData => {
    return {
        type: "UPDATE_PROJECT_FORM",
        formData
    }
}

export const createProject = projectData => {
    return dispatch => {
        return fetch(`http://localhost:8000/api/projects/`, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                project: {
                    title: projectData.title,
                    description: projectData.description,
                    content: projectData.content,
                }
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.error){
                //error
                alert(data.error)
            }else {
                //success
                dispatch({type: "RESET_FORM"});
            }
        });
    }
}
