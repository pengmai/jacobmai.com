import React from 'react';
import { NameRNN } from '../name-rnn/NameRNN';
import { About } from './About';
import { Code } from './Code';
import { PageHeader } from './commonComponents';
import { Footer } from './Footer';
import { Music } from './Music';
import { Navigation } from './Navigation';
import { NotFound } from './NotFound';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/App.css';

// Routing.
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';

function HomeHeader() {
	return (
		<div>
			<Navigation/>
			<PageHeader id="home-page-header">
				<div className="tagline-upper">Jacob Mai</div>
				<div className="tagline-lower">
					Musician, Developer, AI Enthusiast
				</div>
			</PageHeader>
			<Footer/>
		</div>
	);
}

export default function App() {
	return (
		<Router basename="/">
			<Switch>
				<Route exact={true} path="/" component={HomeHeader}/>
				<Route path="/music" component={Music}/>
				<Route path="/code" component={Code}/>
				<Route path="/about" component={About}/>
				<Route path="/names" component={NameRNN}/>
				<Route component={NotFound}/>
			</Switch>
		</Router>
	);
}
