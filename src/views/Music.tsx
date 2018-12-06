import React from 'react';
import { Col, Grid, PageHeader, Row } from 'react-bootstrap';
import { ExternalPreview } from './commonComponents';
import { Footer } from './Footer';
import { Navigation } from './Navigation';

import aStoryImg from '../images/aStoryAboutLove.jpg';
import feelingsImg from '../images/feelings.jpg';
import incandescentImg from '../images/incandescent.jpg';
import preludeImg from '../images/prelude.jpg';

const images = [
  {
    href: 'https://soundcloud.com/acasurroundsound/feelings',
    src: feelingsImg,
    caption: 'Feelings'
  },
  {
    href: 'https://indigovioletca.bandcamp.com/album/prelude-the-demo',
    src: preludeImg,
    caption: 'Prelude'
  },
  {
    href: 'https://jacobmai.bandcamp.com/releases',
    src: aStoryImg,
    caption: 'A Story About Love'
  },
  {
    href: 'https://thesyntheticarmy.bandcamp.com/album/incandescent',
    src: incandescentImg,
    caption: 'Incandescent'
  }
];

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
          {images.map(im =>
            <Col xs={12} sm={6}>
              <ExternalPreview
                href={im.href}
                src={im.src}
                caption={im.caption}
                />
            </Col>
          )}
        </Row>
      </Grid>
      <Footer/>
    </div>
  );
}
