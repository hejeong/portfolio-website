import React from 'react';
import logo from './logo.svg';
import About from './components/About';
import NewProjectForm from './components/NewProjectForm';
import NewBlogPostForm from './components/NewBlogPostForm';
import BlogsContainer from './containers/BlogsContainer';
import Project from './components/Project';
import ProjectsContainer from './containers/ProjectsContainer';
import Home from './components/Home';
import { BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <body>
      <Router>
        <Route exact path='/' component={ Home } />
        <Route exact path='/blogs/new' component={NewBlogPostForm} />
        <Route exact path="/blogs" component={BlogsContainer} />
        <Route exact path='/projects/new' component={ NewProjectForm } />
        <Route exact path='/projects/:id' component={Project} />
        <Route exact path='/projects' component={ ProjectsContainer } />
        <Route exact path='/about' component={ About } />
      </Router>
      </body>
    </div>
  );
}

export default App;
