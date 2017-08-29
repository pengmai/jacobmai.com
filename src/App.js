import React, { Component } from 'react';
import { PageHeader, Grid, Row, Col, Nav, Navbar, NavItem } from 'react-bootstrap';
import './App.css';
// Icons
import Youtube from 'react-icons/lib/fa/youtube-square';
import Github from 'react-icons/lib/fa/github';
import Facebook from 'react-icons/lib/fa/facebook-square';

function HomeHeader() {
  return (
    <PageHeader className="text-center">
      <div className="tagline-upper">Jacob Mai</div>
      <small className="tagline-lower">
        Musician, Developer, Tester
      </small>
    </PageHeader>
  );
}

function HomeNavigation() {
  return(
    <Navbar fluid collapseOnSelect>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem eventKey={1} href='#'>Music</NavItem>
          <NavItem eventKey={2} href='#'>Code</NavItem>
          <NavItem eventKey={3} href='#'>About</NavItem>
          <NavItem eventKey={4} href='#'>Contact</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

function Footer() {
  return(
    <Grid className="footer">
      <Row>
        <Col xs={4}>
          <a href="https://www.youtube.com/channel/UCwzBKt0x2hl66aaL2QuqF0w"
            target="_blank"
            rel="noopener noreferrer">
            <Youtube className="social-icon"/>
          </a>
        </Col>
        <Col xs={4}>
          <a href="https://github.com/pengmai"
            target="_blank"
            rel="noopener noreferrer">
            <Github className="social-icon"/>
          </a>
        </Col>
        <Col xs={4}>
          <a href="https://www.facebook.com/jacob.peng.5"
            target="_blank"
            rel="noopener noreferrer">
            <Facebook className="social-icon"/>
          </a>
        </Col>
      </Row>
    </Grid>
  );
}
class App extends Component {
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

export default App;
