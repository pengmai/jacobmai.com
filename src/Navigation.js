import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export function Navigation(props) {
  return (
    <Navbar fluid collapseOnSelect>
      <Navbar.Header>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          <LinkContainer exact to='/'>
            <NavItem>Home</NavItem>
          </LinkContainer>
          <LinkContainer to='/music'>
            <NavItem>Music</NavItem>
          </LinkContainer>
          <LinkContainer to='/code'>
            <NavItem>Code</NavItem>
          </LinkContainer>
          <LinkContainer to='/blog'>
            <NavItem>Blog</NavItem>
          </LinkContainer>
          <LinkContainer to='/about'>
            <NavItem>About</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
