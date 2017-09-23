import React from 'react';
import range from 'lodash/range';

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

export function NumberOfComments(props) {
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

export function Tags(props) {
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
