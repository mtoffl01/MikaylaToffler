import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './index.css';
import App from './App';
import Projects from './components/Projects'

ReactDOM.render(
  <Router>
    {/* <React.StrictMode> */}
      <Route exact path='/'>
        <App />
      </Route>
      <Route path="/projects" component={Projects}/>
    {/* </React.StrictMode> */}
  </Router>,
  document.getElementById('root')
);

