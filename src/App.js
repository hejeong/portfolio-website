import React, {Component} from 'react';
import About from './components/About';
import AdminLogin from './components/AdminLogin';
import NewProjectForm from './components/NewProjectForm';
import NewBlogPostForm from './components/NewBlogPostForm';
import BlogsContainer from './containers/BlogsContainer';
import Project from './components/Project';
import ProjectsContainer from './containers/ProjectsContainer';
import AdminLogout from './components/AdminLogout';
import BlogPost from './components/BlogPost';
import {fetchBlogData} from './actions/blog';
import {fetchProjectIndex} from './actions/project';
import Home from './components/Home';
import { Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';

class App extends Component {
  componentDidMount(){
    this.props.fetchBlogData()
    this.props.fetchProjectIndex()
  }
  render(){
      return (
      <div className="App">
        <Switch >
          <Route exact path='/' component={ Home } />
          <Route exact path='/blog/new' component={NewBlogPostForm} />
          <Route exact path='/blog/:id' component={ BlogPost } />
          <Route exact path="/blogs" component={BlogsContainer} />
          <Route exact path='/projects/new' component={ NewProjectForm } />
          <Route exact path='/projects/:id' component={Project} />
          <Route exact path='/projects' component={ ProjectsContainer } />
          <Route exact path='/about' component={ About } />
          <Route exact path='/admin' component={ AdminLogin } />
          <Route exact path='/logout' component={ AdminLogout } />
        </Switch>
      </div>
    );
  }
}

export default connect(null, { fetchBlogData, fetchProjectIndex })(App);