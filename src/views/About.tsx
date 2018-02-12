import React from 'react';
import { Col, Grid, Image, PageHeader, Row } from 'react-bootstrap';
import { ExternalLink } from './commonComponents';
import { Footer } from './Footer';
import { Navigation } from './Navigation';

import me from '../images/me.jpg';
import '../styles/About.css';

export function About() {
  const synthArmyPhoto = 'https://www.facebook.com/syntheticarmy/photos/a.640' +
    '442989368014.1073741829.538480496230931/764718573607121/?type=3&theater';
  return (
    <div>
      <Navigation/>
      <PageHeader className="text-center">About</PageHeader>
      <Grid>
        <Row>
          <Col xs={12} sm={3} md={2}>
            <Image id="me" src={me} alt="me" circle={true}/>
          </Col>
          <Col xs={12} sm={9} md={10}>
            <div>
              Hello! I&#39;m Jacob, a singer-songwriter and third year Computer
              Science student studying at the University of Toronto.
              <br/> <br/>
              Some facts:
              <ul>
                <li>
                  I&#39;m currently on PEY at
                  <ExternalLink
                    href="https://www.chapters.indigo.ca/en-ca/"
                    label="Indigo Books &amp; Music"
                  />
                  as a Junior QA Developer.
                </li>
                <li>
                  I&#39;m also in a band coincidentally named
                  <ExternalLink
                    href="https://indigovioletca.bandcamp.com"
                    label="Indigo Violet"
                  />
                  and I promise my band was named before I started
                  working there.
                </li>
                <li>
                  I was in a band called
                  <ExternalLink
                    href="https://facebook.com/syntheticarmy/"
                    label="The Synthetic Army"
                  />
                  and we did
                  <ExternalLink
                    href="https://youtu.be/iZsXY5XhfHg"
                    label="a"
                    noSpace={true}
                  />
                  <ExternalLink
                    href="https://youtu.be/Nh3Y25UV-UE"
                    label="few"
                    noSpace={true}
                  />
                  <ExternalLink
                    href={synthArmyPhoto}
                    label="pretty"
                    noSpace={true}
                  />
                  <ExternalLink
                    href="https://thesyntheticarmy.bandcamp.com/track/chicago"
                    label="cool"
                    noSpace={true}
                  />
                  <ExternalLink
                    href="https://youtu.be/A4VMBXRmxW4"
                    label="things"
                    noSpace={true}
                  />.
                </li>
                <li>
                  My favourite movie is Big Hero 6 and I have a Baymax plushie
                  at my desk at work.
                </li>
                <li>
                  I&#39;m a feminist and a vegetarian.
                </li>
                <li>
                  If you&#39;d like to get in touch, you can reach me at&#8194;
                  <strong>jacobmpeng@gmail.com</strong>.
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Grid>
      <Footer/>
    </div>
  );
}
