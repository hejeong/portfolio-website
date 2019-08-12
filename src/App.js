import React from 'react';
import logo from './logo.svg';
import ProjectsContainer from './containers/ProjectsContainer';
import Home from './components/Home';
import { BrowserRouter as Router, Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <body>
      <Router>
        <Route exact path='/' component={ Home } />
        <Route exact path='/projects' component={ ProjectsContainer } />
      </Router>
      </body>
    </div>
  );
}

export default App;
