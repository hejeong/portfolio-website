import React, {Component} from 'react';
import logo from './logo.svg';
import About from './components/About';
import NewProjectForm from './components/NewProjectForm';
import NewBlogPostForm from './components/NewBlogPostForm';
import BlogsContainer from './containers/BlogsContainer';
import Project from './components/Project';
import ProjectsContainer from './containers/ProjectsContainer';
import BlogPost from './components/BlogPost';
import {fetchBlogData} from './actions/blog';
import Home from './components/Home';
import { Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';

class App extends Component {
  componentDidMount(){
    this.props.fetchBlogData()
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
        </Switch>
      </div>
    );
  }
}

export default connect(null, { fetchBlogData })(App);