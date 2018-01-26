import React, { Component } from 'react';
import Header from './header';
import Posts from './Posts.react'
import Post from './Post.react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import utils from '../util'

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const App = () => (
  <Router>
    <div>
      <div className="App">
        <Header />
      </div>
      <div className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/blog">Blog</Link></li>
      </ul>
      </div>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route exact path="/blog" component={Posts}/>
      <Route path="/blog/:id" component={Post}/>
    </div>
  </Router>
)

export default App;
