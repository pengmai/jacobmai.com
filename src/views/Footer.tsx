import React from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { ExternalLink } from './commonComponents';

// Icons
import {
  FaFacebookSquare, FaGithub, FaYoutubeSquare
} from 'react-icons/fa';

export function Footer() {
  return(
    <Grid className="footer">
      <Row>
        <Col xs={4}>
          <ExternalLink
            href="https://www.youtube.com/channel/UCwzBKt0x2hl66aaL2QuqF0w"
            label={<FaYoutubeSquare className="social-icon"/>}
          />
        </Col>
        <Col xs={4}>
          <ExternalLink
            href="https://github.com/pengmai"
            label={<FaGithub className="social-icon"/>}
          />
        </Col>
        <Col xs={4}>
          <ExternalLink
            href="https://www.facebook.com/jacob.peng.5"
            label={<FaFacebookSquare className="social-icon"/>}
          />
        </Col>
      </Row>
    </Grid>
  );
}
