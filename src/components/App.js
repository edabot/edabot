import React from 'react';
import Projects from './Projects.react';
import Navbar from './Navbar.react'
import About from './About.react'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Projects}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
)

export default App;
