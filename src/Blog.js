import React, { Component } from 'react';
import { PageHeader, Grid, Row, Col } from 'react-bootstrap';
import { Navigation } from './Navigation.js';
import { Footer } from './Footer.js';
import range from 'lodash/range';
import './Blog.css';

export function Blog() {
  return (
    <div>
      <Navigation/>
      <PageHeader className='text-center'>Blog</PageHeader>
      <BlogHome/>
      <Footer/>
    </div>
  );
}

function checkStatus(response) {
  if (response.ok) {
    return response;
  }
  throwError(response);
}

function parseJSON(response) {
  return response.json();
}

function throwError(response) {
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  throw error;
}

function NumberOfComments(props) {
  if (props.numberofcomments === 0) {
    return (null);
  } else if (props.numberofcomments === 1) {
    return (<p className='grayed'>1 comment</p>);
  } else {
    return (
      <p className='grayed'>
        {props.numberofcomments + ' comments'}
      </p>
    );
  }
}

function Tags(props) {
  if (props.tags.length === 0) {
    return null;
  }
  return (
    <div className='grayed'>
      Tags:
      {range(props.tags.length).map(i => {
        return (
          <a href='#'> &#x23;{props.tags[i]}</a>
        );
      })}
    </div>
  );
}

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
