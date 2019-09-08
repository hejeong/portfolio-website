import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { updateAdminLoginForm, login, checkToken } from '../actions/adminLogin';

class AdminLogin extends Component{ 

    componentDidMount(){
        const jwtToken = localStorage.getItem('token');
        if(!!jwtToken) {
            this.props.checkToken(jwtToken)
        }
    }
    handleInputChange = (event) => {
        const {name, value} = event.target
        const updateFormData = {
            ...this.props.loginForm,
            [name]: value
        }
        this.props.updateAdminLoginForm(updateFormData)
    }

    handleSubmit = event => {
        event.preventDefault()
        this.props.login({...this.props.loginForm})
    }
    
    render(){
        if(!!this.props.loggedIn){
            return <Redirect to='/'/>
        }
        return <div>
        <form onSubmit={this.handleSubmit}>
            <label >Username:</label>
            <input type="text" name="username" onChange={this.handleInputChange}/>
            <label >Password:</label>
            <input type="password" name="password" onChange={this.handleInputChange}/>
            <input type="submit" value="Login"/>
        </form>
    </div>
    }
}
const mapStateToProps = (state) => {
    return {
        loginForm: state.adminReducer,
        loggedIn: state.usersReducer.username
    } 
}

export default connect(mapStateToProps, {login, updateAdminLoginForm, checkToken} )(AdminLogin);