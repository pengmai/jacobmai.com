import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { Navigation } from './Navigation.js';
import { Footer } from './Footer.js';
import { BlogHome } from './blog/BlogHome.js';
import { Post } from './blog/Post.js';
import './Blog.css';

// Routing.
import { Route } from 'react-router-dom';

export function Blog({ match }) {
  return (
    <div>
      <Navigation/>
      <PageHeader className='text-center'>Blog</PageHeader>
      <Route exact path={match.url} component={BlogHome}/>
      <Route path={`${match.url}/:postid`} component={Post}/>
      <Footer/>
    </div>
  );
}
