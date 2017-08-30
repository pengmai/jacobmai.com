import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import { Footer } from './Footer.js';
import { Navigation } from './Navigation.js';
import { About } from './About.js';
import './App.css';

// Routing.
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

function HomeHeader() {
  return (
    <PageHeader id='home-page-header' className='text-center'>
      <div className='tagline-upper'>Jacob Mai</div>
      <small className='tagline-lower'>
        Musician, Developer, Tester
      </small>
    </PageHeader>
  );
}

function Code() {
  return (
    <PageHeader className='text-center'>Code</PageHeader>
  );
}

function Music() {
  return (
    <PageHeader className='text-center'>Music</PageHeader>
  );
}

function Blog() {
  return (
    <PageHeader className='text-center'>Blog</PageHeader>
  );
}

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Navigation/>
            <Route exact path='/' component={HomeHeader}/>
            <Route path='/music' component={Music}/>
            <Route path='/code' component={Code}/>
            <Route path='/blog' component={Blog}/>
            <Route path='/about' component={About}/>
          </div>
        </Router>
        <Footer/>
      </div>
    );
  }
}

export default App;
