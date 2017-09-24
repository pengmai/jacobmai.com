import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import {
  PostHighlight, checkStatus, parseJSON
} from './commonBlogComponents.js';
import range from 'lodash/range';

export class BlogHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topTenPosts: [],
      loading: true,
      error: false
    }

    this.retrieveTopTen();
  }

  retrieveTopTen() {
    let req = new Request('/api/v1/blogapi.php?request=posts');
    fetch(req)
      .then(checkStatus)
      .then(parseJSON)
      .then((responseBody) => this.setState({
        topTenPosts: responseBody,
        loading: false
      }))
      .catch(err => {this.setState({
        loading: false,
        error: true
      })});
  }

  render() {
    let topTen = this.state.topTenPosts;
    if (this.state.loading) {
      return (
        <p className='loading'>Loading posts...</p>
      );
    } else if (this.state.error) {
      return (
        <p>An error has occurred. Please try again.</p>
      );
    } else {
      return (
        <Grid>
          {range(topTen.length).map(i => {
            return (
              <Row key={i}>
                <Col xs={12}>
                  <PostHighlight post={topTen[i]} match={this.props.match}/>
                </Col>
              </Row>
            );
          })}
        </Grid>
      );
    }
  }
}
