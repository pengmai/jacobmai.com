import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { ExternalLink } from './commonComponents.js';

// Icons
import Youtube from 'react-icons/lib/fa/youtube-square';
import Github from 'react-icons/lib/fa/github';
import Facebook from 'react-icons/lib/fa/facebook-square';

export function Footer() {
  return(
    <Grid className='footer'>
      <Row>
        <Col xs={4}>
          <ExternalLink href='https://www.youtube.com/channel/UCwzBKt0x2hl66aaL2QuqF0w'
            label={<Youtube className='social-icon'/>}
          />
        </Col>
        <Col xs={4}>
          <ExternalLink href='https://github.com/pengmai'
            label={<Github className='social-icon'/>}
          />
        </Col>
        <Col xs={4}>
          <ExternalLink href='https://www.facebook.com/jacob.peng.5'
            label={<Facebook className='social-icon'/>}
          />
        </Col>
      </Row>
    </Grid>
  );
}
