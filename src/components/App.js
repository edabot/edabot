import React from 'react';
import Header from './Header.react';
import Projects from './Projects.react';
import Navbar from './Navbar.react'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const App = () => (
  <Router>
    <div>
      <Navbar />
      <Header />
      <Route exact path="/" component={Projects}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
)

export default App;
