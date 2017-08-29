import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import { Footer } from './Footer.js';
import { Navigation } from './Navigation.js';
import './App.css';

// Routing.
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

function HomeHeader() {
  return (
    <PageHeader className='text-center'>
      <div className='tagline-upper'>Jacob Mai</div>
      <small className='tagline-lower'>
        Musician, Developer, Tester
      </small>
    </PageHeader>
  );
}

function Code() {
  return (
    <h2 className='text-center'>Code</h2>
  );
}

function Music() {
  return (
    <h2 className='text-center'>Music</h2>
  );
}

function Blog() {
  return (
    <h2 className='text-center'>Blog</h2>
  );
}

function About() {
  return (
    <h2 className='text-center'>About/Contact</h2>
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
