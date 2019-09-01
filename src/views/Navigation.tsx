import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export function Navigation() {
	return (
		<Navbar collapseOnSelect={true}>
			<Navbar.Brand>
				<Navbar.Toggle />
			</Navbar.Brand>
			<Navbar.Collapse>
				<Nav className="float-right">
					<LinkContainer exact={true} to="/">
						<NavItem>Home</NavItem>
					</LinkContainer>
					<LinkContainer to="/music">
						<NavItem>Music</NavItem>
					</LinkContainer>
					<LinkContainer to="/code">
						<NavItem>Code</NavItem>
					</LinkContainer>
					<LinkContainer to="/about">
						<NavItem>About</NavItem>
					</LinkContainer>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
