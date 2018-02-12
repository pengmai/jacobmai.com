import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { About } from './About';
import { Code } from './Code';
import { Footer } from './Footer';
import { Music } from './Music';
import { Navigation } from './Navigation';
import { NotFound } from './NotFound';

import '../styles/App.css';

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
      <PageHeader id="home-page-header" className="text-center">
        <div className="tagline-upper">Jacob Mai</div>
        <small className="tagline-lower">
          Musician, Developer, Tester
        </small>
      </PageHeader>
      <Footer/>
    </div>
  );
}

export default function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route exact={true} path="/" component={HomeHeader}/>
        <Route path="/music" component={Music}/>
        <Route path="/code" component={Code}/>
        <Route path="/about" component={About}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  );
}
