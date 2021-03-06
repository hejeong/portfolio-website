import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import projectsReducer from './reducers/project';
import blogPostsReducer from './reducers/blog';
import adminReducer from './reducers/adminLogin';
import usersReducer from './reducers/user';
import { BrowserRouter as Router} from 'react-router-dom';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers = combineReducers({
    projectsReducer,
    blogPostsReducer,
    adminReducer,
    usersReducer
})

const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));

ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
