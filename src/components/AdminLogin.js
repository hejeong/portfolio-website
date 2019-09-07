import React from 'react';
import { connect } from 'react-redux';
import { updateAdminLoginForm, login } from '../actions/adminLogin';

const AdminLogin = ({login, loginForm, updateAdminLoginForm}) => {

    const handleInputChange = (event) => {
        const {name, value} = event.target
        const updateFormData = {
            ...loginForm,
            [name]: value
        }
        updateAdminLoginForm(updateFormData)
    }

    const handleSubmit = event => {
        event.preventDefault()
        login({...loginForm})
    }

    return <div>
        <form onSubmit={handleSubmit}>
            <label for="username" >Username:</label>
            <input type="text" name="username" onChange={handleInputChange}/>
            <label for="username" >Password:</label>
            <input type="password" name="password" onChange={handleInputChange}/>
            <input type="submit" value="Login"/>
        </form>
    </div>
}

const mapStateToProps = (state) => {
    return {
        loginForm: state.adminLoginReducer
    } 
}

export default connect(mapStateToProps, {login, updateAdminLoginForm} )(AdminLogin);