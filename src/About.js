import React from 'react';
import { PageHeader, Image, Grid, Row, Col } from 'react-bootstrap';
import me from './me.jpg';
import './About.css';

export function About() {
  return (
    <div>
      <PageHeader className='text-center'>About</PageHeader>
      <Grid>
        <Row>
          <Col xs={12} sm={3} md={2}>
            <Image id='me' src={me} circle/>
          </Col>
          <Col xs={12} sm={9} md={10}>
            <p>
              Hello! I'm Jacob, a singer-songwriter and third year Computer
              Science student studying at the University of Toronto. Currently,
              I'm on PEY at&#8194;
              <a href='https://www.chapters.indigo.ca/en-ca/'
                target='_blank'
                rel='noopener noreferrer'>
                Indigo Books & Music
              </a> as a Junior QA Developer. I also have a band coincidentally
              named&#8194;
              <a href='https://indigovioletca.bandcamp.com'
                target='_blank'
                rel='noopener noreferrer'>
                Indigo Violet
              </a> and I promise my band was named before I started working
              there.
            </p>
          </Col>
        </Row>
      </Grid>
    </div>
  );
}
