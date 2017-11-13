import React, { Component } from 'react';
import { Grid, Row, Col, Pager } from 'react-bootstrap';
import { Redirect } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import {
  PostHighlight, checkStatus, parseJSON
} from './commonBlogComponents.js';
import range from 'lodash/range';

function contains(a, obj) {
  let i = a.length;
  while (i--) {
    if (a[i] === obj) {
      return true;
    }
  }
  return false;
}

export class BlogHome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topTenPosts: [],
      loading: true,
      hasNext: true,
      error: false,
      notFound: false
    };

    this.retrieveTopTen(props.match.params.page);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ loading: true });
    this.retrieveTopTen(nextProps.match.params.page);
  }

  retrieveTopTen(page) {
    if (page == null) {
      page = 1;
    }
    let req = new Request('/api/v1/blogapi.php?request=posts/page/'
      + page);
    fetch(req)
      .then(checkStatus)
      .then(parseJSON)
      .then((responseBody) => {
        let hasNext = true;
        if (contains(responseBody, 'end')) {
          hasNext = false;
          responseBody.pop();
        }
        this.setState({
          topTenPosts: responseBody,
          loading: false,
          hasNext: hasNext
        });
      })
      .catch(err => {
        this.setState({
          loading: false,
          notFound: err.response.status === 404,
          error: true
        });
    });
  }

  render() {
    if (this.state.notFound) {
      return (<Redirect to='/notfound'/>);
    }

    let page = this.props.match.params.page == null ?
      1 : parseInt(this.props.match.params.page, 10);
    let nextPage = page + 1;
    let prevPage = page - 1;
    let topTen = this.state.topTenPosts;
    if (this.state.loading) {
      return (
        <p className='loading'>Loading posts...</p>
      );
    } else if (this.state.error) {
      return (
        <p className='loading'>An error has occurred. Please try again.</p>
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
          <Row>
            <Col xs={12}>
              {this.state.hasNext ? "" :
                <p className="loading">End of posts.</p>
              }
              <Pager>
                {page === 1 ? "" :
                  <LinkContainer to={`/blog/page/${prevPage}`}>
                    <Pager.Item
                      previous>
                      &larr; Previous Page
                    </Pager.Item>
                  </LinkContainer>
                }
                {this.state.hasNext ?
                  <LinkContainer to={`/blog/page/${nextPage}`}>
                    <Pager.Item
                      next>
                      Next Page &rarr;
                    </Pager.Item>
                  </LinkContainer> : ""
                }
              </Pager>
            </Col>
          </Row>
        </Grid>
      );
    }
  }
}
