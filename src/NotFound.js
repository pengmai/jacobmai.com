import React from 'react';
import { Navigation } from './Navigation.js';
import { Footer } from './Footer.js';

export function NotFound() {
  return (
    <div>
      <Navigation/>
      <h2 id="home-page-header">
        We couldn't find the page you were looking for.
      </h2>
      <Footer/>
    </div>
  );
}
