import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

// Icons
import Youtube from 'react-icons/lib/fa/youtube-square';
import Github from 'react-icons/lib/fa/github';
import Facebook from 'react-icons/lib/fa/facebook-square';

export function Footer() {
  return(
    <Grid className='footer'>
      <Row>
        <Col xs={4}>
          <a href='https://www.youtube.com/channel/UCwzBKt0x2hl66aaL2QuqF0w'
            target='_blank'
            rel='noopener noreferrer'>
            <Youtube className='social-icon'/>
          </a>
        </Col>
        <Col xs={4}>
          <a href='https://github.com/pengmai'
            target='_blank'
            rel='noopener noreferrer'>
            <Github className='social-icon'/>
          </a>
        </Col>
        <Col xs={4}>
          <a href='https://www.facebook.com/jacob.peng.5'
            target='_blank'
            rel='noopener noreferrer'>
            <Facebook className='social-icon'/>
          </a>
        </Col>
      </Row>
    </Grid>
  );
}
