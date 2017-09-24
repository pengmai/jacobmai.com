import React from 'react';
import range from 'lodash/range';
import { LinkContainer } from 'react-router-bootstrap';

export function checkStatus(response) {
  if (response.ok) {
    return response;
  }
  throwError(response);
}

export function parseJSON(response) {
  return response.json();
}

function throwError(response) {
  const error = new Error(`HTTP Error ${response.statusText}`);
  error.status = response.statusText;
  error.response = response;
  throw error;
}

function Tags(props) {
  if (props.tags.length === 0) {
    return null;
  }
  return (
    <div className='grayed text-center'>
      Tags:
      {range(props.tags.length).map(i => {
        return (
          <LinkContainer
            key={i}
            to={`/blog/tagged/${props.tags[i]}`}>
            <a> &#x23;{props.tags[i]}</a>
          </LinkContainer>
        );
      })}
    </div>
  );
}

function NumberOfComments(props) {
  if (props.numberofcomments === 0) {
    return (null);
  } else if (props.numberofcomments === 1) {
    return (<p className='grayed text-center'>1 comment</p>);
  } else {
    return (
      <p className='grayed text-center'>
        {props.numberofcomments + ' comments'}
      </p>
    );
  }
}

export function PostHighlight(props) {
  let id = props.post.id;
  let title = props.post.title;
  let body = props.post.body;
  let numberofcomments = props.post.numberofcomments;
  let tags = props.post.tags;

  return (
    <div>
      <LinkContainer to={`/blog/${id}`}>
        <a><h2 className='title'>{title}</h2></a>
      </LinkContainer>
      <p style={{whiteSpace: 'pre-line'}}>
        {body}
      </p>
      <Tags tags={tags}/>
      <NumberOfComments numberofcomments={numberofcomments}/>
      <br/>
      <div className='underline'/>
    </div>
  );
}
