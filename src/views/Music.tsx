import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ExternalPreview, PageHeader } from './commonComponents';
import { Footer } from './Footer';
import { Navigation } from './Navigation';

import aStoryImg from '../images/aStoryAboutLove.jpg';
import feelingsImg from '../images/feelings.jpg';
import incandescentImg from '../images/incandescent.jpg';
import preludeImg from '../images/prelude.jpg';

const images = [
	{
		caption: 'Feelings',
		href: 'https://soundcloud.com/acasurroundsound/feelings',
		src: feelingsImg
	},
	{
		caption: 'Prelude',
		href: 'https://indigovioletca.bandcamp.com/album/prelude-the-demo',
		src: preludeImg
	},
	{
		caption: 'A Story About Love',
		href: 'https://jacobmai.bandcamp.com/releases',
		src: aStoryImg
	},
	{
		caption: 'Incandescent',
		href: 'https://thesyntheticarmy.bandcamp.com/album/incandescent',
		src: incandescentImg
	}
];

export function Music() {
	return (
		<div>
			<Navigation/>
			<PageHeader className="text-center">Music</PageHeader>
			<Container>
				<Row>
					<Col xs={12}>
						<p className="text-center">
							On this page, you can find music that I&#39;ve created.
						</p>
					</Col>
				</Row>
				<Row>
					{images.map((im) =>
						<Col xs={12} sm={6} key={im.caption}>
							<ExternalPreview
								href={im.href}
								src={im.src}
								caption={im.caption}
							/>
						</Col>
					)}
				</Row>
			</Container>
			<Footer/>
		</div>
	);
}
