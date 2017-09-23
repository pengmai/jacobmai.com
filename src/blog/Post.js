import React from 'react';

export function Post({ match }) {
  return (
    <div>
      <h3>{match.params.postid}</h3>
    </div>
  );
}
