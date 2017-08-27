import React, { Component } from 'react';
import { PageHeader, Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import './App.css';
import musicImg from './musicIcon.png';
import codeImg from './codeIcon.png';
import atIcon from './at.png';
import speechBubble from './speechbubble.png';
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
  let xs = 6;
  let sm = 6;
  let md = 6;
  let lg = 6;
  return(
    <Grid>
      <Row>
        <Col xs={xs} sm={sm} md={md} lg={lg}>
          <Thumbnail href="#" src={musicImg} alt="Music" responsive className="center-block"/>
        </Col>
        <Col xs={xs} sm={sm} md={md} lg={lg}>
          <Thumbnail href="#" src={codeImg} alt="Code" responsive className="center-block"/>
        </Col>
        <Col xs={xs} sm={sm} md={md} lg={lg}>
          <Thumbnail href="#" src={speechBubble} alt="Blog" responsive className="center-block"/>
        </Col>
        <Col xs={xs} sm={sm} md={md} lg={lg}>
          <Thumbnail href="#" src={atIcon} alt="Contact" responsive className="center-block"/>
        </Col>
      </Row>
    </Grid>
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
  // return (
  //   <footer className="text-center">
  //     <div className="container">
  //       <p><em>Copyright &copy; Jacob Mai 2017</em></p>
  //     </div>
  //   </footer>
  // );
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
