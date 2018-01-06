import React from 'react';
import PropTypes from 'prop-types';
import { PageHeader } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Navigation } from './Navigation.js';
import { Footer } from './Footer.js';
import { BlogHome } from './blog/BlogHome.js';
import { Post } from './blog/Post.js';
import { Tagged } from './blog/Tagged.js';
import './Blog.css';

// Routing.
import { Route, Switch } from 'react-router-dom';

/**
 * A wrapper for the blog portion of the site that handles routing between
 * different pages.
 */
export function Blog({ match }) {
  return (
    <div>
      <Navigation/>
      <LinkContainer to={match.url}>
        <a><PageHeader className='text-center title'>Blog</PageHeader></a>
      </LinkContainer>
      <Switch>
        <Route exact path={match.url} component={BlogHome}/>
        <Route path={`${match.url}/page/:page`} component={BlogHome}/>
        <Route path={`${match.url}/tagged/:tag`} component={Tagged}/>
        <Route path={`${match.url}/:postid`} component={Post}/>
      </Switch>
      <Footer/>
    </div>
  );
}

Blog.propTypes = {
  match: PropTypes.shape({
    url: PropTypes.string.isRequired
  }).isRequired
};
