import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export function Post({ match }) {
  return (
    <Grid>
      <Row>
        <Col xs={12}>
          <h3>{match.params.postid}</h3>
        </Col>
      </Row>
    </Grid>
  );
}
