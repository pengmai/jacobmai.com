import React, { Component } from 'react';
import { PageHeader, Grid, Row, Col, Nav, Navbar, NavItem } from 'react-bootstrap';
import './App.css';

// Icons
import Youtube from 'react-icons/lib/fa/youtube-square';
import Github from 'react-icons/lib/fa/github';
import Facebook from 'react-icons/lib/fa/facebook-square';

// Routing.
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

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

class HomeNavigation extends Component {
  render() {
    return (
      <Navbar fluid collapseOnSelect>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav pullRight>
            <LinkContainer to='/music'>
              <NavItem>Music</NavItem>
            </LinkContainer>
            <LinkContainer to='/code'>
              <NavItem>Code</NavItem>
            </LinkContainer>
            <LinkContainer to='/blog'>
              <NavItem>Blog</NavItem>
            </LinkContainer>
            <LinkContainer to='/about'>
              <NavItem>About</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

function Footer() {
  return(
    <Grid className='footer'>
      <Row>
        <Col xs={4}>
          <a href='https://www.youtube.com/channel/UCwzBKt0x2hl66aaL2QuqF0w'
            target='_blank'
            rel='noopener noreferrer'>
            <Youtube className='social-icon'/>
          </a>
        </Col>
        <Col xs={4}>
          <a href='https://github.com/pengmai'
            target='_blank'
            rel='noopener noreferrer'>
            <Github className='social-icon'/>
          </a>
        </Col>
        <Col xs={4}>
          <a href='https://www.facebook.com/jacob.peng.5'
            target='_blank'
            rel='noopener noreferrer'>
            <Facebook className='social-icon'/>
          </a>
        </Col>
      </Row>
    </Grid>
  );
}

function Code() {
  return (
    <h1>Code</h1>
  );
}

function Music() {
  return (
    <h1>Music</h1>
  );
}

function Blog() {
  return (
    <h1>Blog</h1>
  );
}

function About() {
  return (
    <h1>About/Contact</h1>
  );
}

class Home extends Component {
  render() {
    return (
      <div>
        <HomeHeader/>
        <HomeNavigation/>
        <Footer/>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home}/>
          <Route path='/music' component={Music}/>
          <Route path='/code' component={Code}/>
          <Route path='/blog' component={Blog}/>
          <Route path='/about' component={About}/>
        </div>
      </Router>
    );
  }
}

export default App;
