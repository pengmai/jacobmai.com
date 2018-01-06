import React from 'react';
import PropTypes from 'prop-types';
import { PageHeader, Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import { ExternalLink } from './commonComponents.js';
import { Navigation } from './Navigation.js';
import { Footer } from './Footer.js';
import SudokuSolver from './sudokusolver/main.js';
import sudokuImg from './sudokusolver/sudoku.png';
import './Code.css';

// Routing.
import { LinkContainer } from 'react-router-bootstrap';
import { Route } from 'react-router-dom';

export function Code({ match }) {
  return (
    <div>
      <Route exact path={match.url} component={Menu}/>
      <Route path={`${match.url}/sudokusolver`} component={SudokuSolver}/>
    </div>
  );
}

Code.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired
};

function Menu({ match }) {
  return (
    <div>
      <Navigation/>
      <PageHeader className='text-center'>Code</PageHeader>
      <Grid>
        <Row>
          <Col xs={12}>
            <p className='text-center'>
              On this page, you can find projects that I&#39;ve developed.
              The source code for everything is available on my
              <ExternalLink href='https://github.com/pengmai'
                label='Github' noSpace/>.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <LinkContainer className='preview'
              to={`${match.url}/sudokusolver`}>
              <figure>
                <Thumbnail src={sudokuImg}/>
                <span className='caption'>
                  <span>Sudoku Solver</span>
                </span>
              </figure>
            </LinkContainer>
          </Col>
        </Row>
      </Grid>
      <Footer/>
    </div>
  );
}

Menu.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired
};
