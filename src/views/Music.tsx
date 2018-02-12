import React from 'react';
import { Col, Grid, PageHeader, Row, Thumbnail } from 'react-bootstrap';
import { Footer } from './Footer';
import { Navigation } from './Navigation';

import aStoryImg from '../images/aStoryAboutLove.jpg';
import incandescentImg from '../images/incandescent.jpg';
import preludeImg from '../images/prelude.jpg';

export interface Props {
  href: string;
  src: string;
  caption: string;
}

function MusicPreview(props: Props) {
  return (
    <a
      className="preview"
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <figure>
        <Thumbnail src={props.src}/>
        <span className="caption">
          <span>{props.caption}</span>
        </span>
      </figure>
    </a>
  );
}

export function Music() {
  return (
    <div>
      <Navigation/>
      <PageHeader className="text-center">Music</PageHeader>
      <Grid>
        <Row>
          <Col xs={12}>
            <p className="text-center">
              On this page, you can find music that I&#39;ve created.
            </p>
          </Col>
        </Row>
        <Row>
          <Col xs={12} sm={6} md={4}>
            <MusicPreview
              href="https://indigovioletca.bandcamp.com/album/prelude-the-demo"
              src={preludeImg}
              caption="Prelude"
            />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <MusicPreview
              href="https://jacobmai.bandcamp.com/releases"
              src={aStoryImg}
              caption="A Story About Love"
            />
          </Col>
          <Col xs={12} sm={6} md={4}>
            <MusicPreview
              href="https://thesyntheticarmy.bandcamp.com/album/incandescent"
              src={incandescentImg}
              caption="Incandescent"
            />
          </Col>
        </Row>
      </Grid>
      <Footer/>
    </div>
  );
}