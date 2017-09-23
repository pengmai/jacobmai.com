import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import {
  NumberOfComments, Tags, checkStatus, parseJSON
} from './commonBlogComponents.js';
import range from 'lodash/range';

function PostHighlight(props) {
  let title = props.post.title;
  let body = props.post.body;
  let numberofcomments = props.post.numberofcomments;
  let tags = props.post.tags;

  return (
    <div>
      <h2>{title}</h2>
      <p style={{whiteSpace: 'pre-line'}}>
        {body}
      </p>
      <NumberOfComments numberofcomments={numberofcomments}/>
      <Tags tags={tags}/>
      <br/>
    </div>
  );
}

export class BlogHome extends Component {
  constructor() {
    super();

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
        error: true,
        loading: false
      })});
  }

  render() {
    let topTen = this.state.topTenPosts;
    if (this.state.loading) {
      return (
        <p>Loading posts...</p>
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
                  <PostHighlight post={topTen[i]}/>
                </Col>
              </Row>
            );
          })}
        </Grid>
      );
    }
  }
}
