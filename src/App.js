import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import { Footer } from './Footer.js';
import { Navigation } from './Navigation.js';
import { About } from './About.js';
import { Code } from './Code.js';
import './App.css';

// Routing.
import {
  BrowserRouter as Router,
  Route,
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

function Music() {
  return (
    <div>
      <Navigation/>
      <PageHeader className='text-center'>Music</PageHeader>
      <Footer/>
    </div>
  );
}

function Blog() {
  return (
    <div>
      <Navigation/>
      <PageHeader className='text-center'>Blog</PageHeader>
      <Footer/>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div>
        <Router className='body'>
          <div>
            <Route exact path='/' component={HomeHeader}/>
            <Route path='/music' component={Music}/>
            <Route path='/code' component={Code}/>
            <Route path='/blog' component={Blog}/>
            <Route path='/about' component={About}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
