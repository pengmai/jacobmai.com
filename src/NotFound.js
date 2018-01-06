import React from 'react';
import { Navigation } from './Navigation.js';
import { Footer } from './Footer.js';

export function NotFound() {
  return (
    <div>
      <Navigation/>
      <h3 id="home-page-header">
        We couldn't find the page you were looking for.
      </h3>
      <Footer/>
    </div>
  );
}
