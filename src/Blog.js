import React from 'react';
import { PageHeader } from 'react-bootstrap';
import { Navigation } from './Navigation.js';
import { Footer } from './Footer.js';
import { BlogHome } from './blog/BlogHome.js';
import './Blog.css';

export function Blog() {
  return (
    <div>
      <Navigation/>
      <PageHeader className='text-center'>Blog</PageHeader>
      <BlogHome/>
      <Footer/>
    </div>
  );
}
