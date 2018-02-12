import React from 'react';
import { Footer } from './Footer';
import { Navigation } from './Navigation';

export function NotFound() {
  return (
    <div>
      <Navigation/>
      <h3 id="home-page-header">
        We couldn&apos;t find the page you were looking for.
      </h3>
      <Footer/>
    </div>
  );
}
