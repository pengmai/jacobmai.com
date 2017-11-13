import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import { Footer } from './Footer.js';
import { Navigation } from './Navigation.js';
import { About } from './About.js';
import { Blog } from './Blog.js';
import { Music } from './Music.js';
import { Code } from './Code.js';
import { NotFound } from './NotFound.js';
import './App.css';

// Routing.
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

function HomeHeader() {
  return (
    <div>
      <Navigation/>
      <PageHeader id='home-page-header' className='text-center'>
        <div className='tagline-upper'>Jacob Mai</div>
        <small className='tagline-lower'>
          Musician, Developer, Tester
        </small>
      </PageHeader>
      <Footer/>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div>
        <Router basename='/' className='body'>
          <Switch>
            <Route exact path='/' component={HomeHeader}/>
            <Route path='/music' component={Music}/>
            <Route path='/code' component={Code}/>
            <Route path='/blog' component={Blog}/>
            <Route path='/about' component={About}/>
            <Route component={NotFound}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
