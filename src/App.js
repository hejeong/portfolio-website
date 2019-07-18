import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectsContainer from './containers/ProjectsContainer';
import { BrowserRouter as Router, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1 className="title">Jonathan Hong</h1>
        <h4 className="sub-title">Full Stack Web Developer</h4>
        <div className="links-container">
        <a href="/" >Projects</a>
        <p>  |  </p>
        <a href="/">Blog </a>  
        <p>  |  </p>
        <a href="/">Contact</a>
        </div>
      </header>
      <body>
      <Router>
        <Route exact to='/' component={ ProjectsContainer } />
      </Router>
      </body>
    </div>
  );
}

export default App;
