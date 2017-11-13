import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import { Redirect } from 'react-router';
import { Tags, checkStatus, parseJSON } from './commonBlogComponents.js';
import { formatDate } from './dateformatter.js';
import range from 'lodash/range';

function IndentedParagraph(props) {
  return (
    <p
      className={props.className}
      style={{paddingLeft: 32 * props.indentation + 'px'}}>
      {props.children}
    </p>
  );
}

function Comment(props) {
  let info = formatDate(new Date(props.comment.date + ' UTC'));
  // Comment is a reply
  if (props.comment.parent !== null) {
    info += (' in reply to ' + props.comment.parentname);
  }
  return (
    <div>
      <IndentedParagraph className='author' indentation={props.indentation}>
        {props.comment.author}
      </IndentedParagraph>
      <IndentedParagraph className='grayed' indentation={props.indentation}>
        {info}
      </IndentedParagraph>
      <IndentedParagraph indentation={props.indentation}>
        {props.comment.body}
      </IndentedParagraph>
    </div>
  );
}

function Comments(props) {
  if (props.comments.length === 0) {
    return (
      <Row>
        <Col xs={12}>
          <h4>No comments</h4>
        </Col>
      </Row>
    );
  }

  // Determine the level of indentation of replies.
  let indentations = {};
  for (let i = 0; i < props.comments.length; i++) {
    let id = props.comments[i].id;
    let parent = props.comments[i].parent;
    if (parent === null) {
      indentations[id] = 0;
    } else {
      indentations[id] = indentations[parent] + 1;
    }
  }

  return (
    <div>
      <Row>
        <Col xs={12}>
          <h4>Comments</h4>
        </Col>
      </Row>
      {range(props.comments.length).map(i => {
        return (
          <Row key={i}>
            <Col xs={12}>
              <Comment
                comment={props.comments[i]}
                indentation={indentations[props.comments[i].id]}
              />
            </Col>
          </Row>
        );
      })}
    </div>
  );
}

export class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      post: null,
      loading: true,
      error: false,
      notFound: false
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
          error: true,
          notFound: err.response.status === 404
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
    } else if (this.state.notFound) {
      return (
        <Redirect to='/notfound'/>
      );
    }

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
        <Comments comments={post.comments}/>
      </Grid>
    );
  }
}
