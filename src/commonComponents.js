import React from 'react';

/**
 * A wrapper to help with spacing and opening anchors in new tabs.
 */
export function ExternalLink(props) {
  if (props.noSpace) {
    return (
      <a href={props.href}
        target='_blank'
        rel='noopener noreferrer'>
        &#8194;{props.label}
      </a>
    )
  } else {
    return (
      <a href={props.href}
        target='_blank'
        rel='noopener noreferrer'>
        &#8194;{props.label}&#8194;
      </a>
    );
  }
}
