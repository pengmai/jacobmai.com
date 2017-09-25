import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Tags, checkStatus, parseJSON } from './commonBlogComponents.js';
import { formatDate } from './dateformatter.js';

export class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: null,
      loading: true,
      error: false
    };
    this.retrievePost(props.match.params.postid)
  }

  retrievePost(id) {
    let req = new Request('/api/v1/blogapi.php?request=posts/' + id);
    fetch(req)
      .then(checkStatus)
      .then(parseJSON)
      .then((responseBody) => {
        this.setState({
          post: responseBody,
          loading: false,
          error: false
        });
      })
      .catch((err) => {
        this.setState({
          loading: false,
          error: true
        })
      });
  }

  componentWillReceiveProps(newProps) {
    this.retrievePost(newProps.match.params.postid);
  }

  render() {
    if (this.state.loading) {
      return (
        <Grid>
          <Row>
            <Col xs={12}>
              <p className='grayed loading'>Loading...</p>
            </Col>
          </Row>
        </Grid>
      );
    }
    console.log(this.state.post);
    let post = this.state.post;
    let created = formatDate(new Date(this.state.post.created + ' UTC'))
    let lastupdated = formatDate(
      new Date(this.state.post.lastupdated + ' UTC')
    );
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <h2 className='title'>{post.title}</h2>
            <p style={{whiteSpace: 'pre-line'}}>
              {post.body}
            </p>
            <Tags tags={post.tags}/>
            <p className='grayed text-center'>
              Created {created}
            </p>
            <p className='grayed text-center'>
              Last updated {lastupdated}
            </p>
          </Col>
        </Row>
      </Grid>
    );
  }
}
