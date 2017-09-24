import React from 'react';
import { PageHeader } from 'react-bootstrap';
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
      <PageHeader className='text-center'>Blog</PageHeader>
      <Switch>
        <Route exact path={match.url} component={BlogHome}/>
        <Route path={`${match.url}/tagged/:tag`} component={Tagged}/>
        <Route path={`${match.url}/:postid`} component={Post}/>
      </Switch>
      <Footer/>
    </div>
  );
}
