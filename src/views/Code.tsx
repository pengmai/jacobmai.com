import React from 'react';
import { CardImg, Col, Container, Row } from 'react-bootstrap';
import { ExternalLink, ExternalPreview, PageHeader } from './commonComponents';
import { Footer } from './Footer';
import { Navigation } from './Navigation';

import SudokuSolver from '../sudokusolver/main';

import workoutImg from '../images/workouttracker.png';
import '../styles/gallery.css';
import sudokuImg from '../sudokusolver/sudoku.png';

// Routing.
import { LinkContainer } from 'react-router-bootstrap';
import { Route } from 'react-router-dom';

interface Props {
	match: {
		url: string
	};
}

export function Code({ match }: Props) {
	return (
		<div>
			<Route exact={true} path={match.url} component={Menu}/>
			<Route path={`${match.url}/sudokusolver`} component={SudokuSolver}/>
		</div>
	);
}

function Menu({ match }: Props) {
	return (
		<div>
			<Navigation/>
			<PageHeader>Code</PageHeader>
			<Container>
				<Row>
					<Col xs={12}>
						<p className="text-center">
							On this page, you can find projects that I&#39;ve developed.
							The source code for everything is available on my
							<ExternalLink
								href="https://github.com/pengmai"
								label="Github"
								noSpace={true}
							/>.
						</p>
					</Col>
				</Row>
				<Row>
					<Col xs={12} md={6}>
						<LinkContainer
							className="preview"
							to={`${match.url}/sudokusolver`}
						>
							<figure>
								<CardImg src={sudokuImg}/>
								<span className="caption">
									<span>Sudoku Solver</span>
								</span>
							</figure>
						</LinkContainer>
					</Col>
					<Col xs={12} md={6}>
						<ExternalPreview
							href="https://github.com/pengmai/workout-tracker"
							src={workoutImg}
							caption="Workout Tracker"
						/>
					</Col>
				</Row>
			</Container>
			<Footer/>
		</div>
	);
}
