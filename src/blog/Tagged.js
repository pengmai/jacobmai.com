import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import {
  PostHighlight, checkStatus, parseJSON
} from './commonBlogComponents.js';
import range from 'lodash/range';

export class Tagged extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
      error: false
    };

    this.retrievePosts(props.match.params.tag);
  }

  retrievePosts(tag) {
    let req = new Request('../../api/v1/blogapi.php?request=tags/' + tag);
    return fetch(req)
      .then(checkStatus)
      .then(parseJSON)
      .then(responseBody => {
        this.setState({
          posts: responseBody,
          loading: false
        });
      })
      .catch(err => {
        this.setState({
          loading: false,
          error: true
        });
      })
  }

  componentWillReceiveProps(newProps) {
    this.retrievePosts(newProps.match.params.tag);
  }

  render() {
    let tag = this.props.match.params.tag;
    if (this.state.loading) {
      return (
        <p className='text-center loading'>
          Loading posts tagged with '{tag}'...
        </p>
      );
    } else if (this.state.error) {
      return (
        <p>An error has occurred. Please try again.</p>
      );
    }

    let posts = this.state.posts;
    return (
      <Grid>
        <Row>
          <Col xs={12} className='text-center'>
            <h2>Posts tagged with '{tag}'</h2>
          </Col>
        </Row>
        {range(posts.length).map(i => {
            return (
              <Row key={i}>
                <Col xs={12}>
                  <PostHighlight post={posts[i]}/>
                </Col>
              </Row>
            );
          })}
      </Grid>
    );
  }
}
