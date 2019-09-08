import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { logout } from '../actions/user';
const AdminLogout = () => {
    localStorage.removeItem('token');
    logout();
    return <Redirect to='/' />
}

export default connect(null, {logout})(AdminLogout);