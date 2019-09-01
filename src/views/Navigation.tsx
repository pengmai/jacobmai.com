import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export function Navigation() {
	return (
		<Navbar collapseOnSelect={true} expand="md" className="justify-content-end">
			<Navbar.Toggle />
			<Navbar.Collapse>
				<Nav className="ml-auto">
					<LinkContainer exact={true} to="/">
						<Nav.Link>Home</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/music">
						<Nav.Link>Music</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/code">
						<Nav.Link>Code</Nav.Link>
					</LinkContainer>
					<LinkContainer to="/about">
						<Nav.Link>About</Nav.Link>
					</LinkContainer>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
