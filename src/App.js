import React from 'react';
import HomePage from './components/HomePage.js';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import {Switch} from 'react-router-dom'
// import Linker from './Linker.js'

function App() {
  return (
    <Router>
      <div className="App">
        <HomePage />
      </div>
      <Switch>
        {/* <Route exact path="/projects" component={Projects} />
        <Route path="/about" component={AboutMe} /> */}
      </Switch>
    </Router>
  );
}

export default App;
