import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ExternalLink } from './commonComponents';

// Icons
import {
  FaGithub, FaYoutubeSquare, FaLinkedin
} from 'react-icons/fa';

export function Footer() {
  return(
    <Container className="footer">
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
            href="https://www.linkedin.com/in/jacob-peng-37436112a/"
            label={<FaLinkedin className="social-icon"/>}
          />
        </Col>
      </Row>
    </Container>
  );
}
