import React from 'react';

export interface Props {
  noSpace?: boolean;
  href: string;
  label: string | JSX.Element;
}

/**
 * A wrapper to help with spacing and opening anchors in new tabs.
 */
export function ExternalLink(props: Props) {
  if (props.noSpace) {
    return (
      <a
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        &#8194;{props.label}
      </a>
    );
  } else {
    return (
      <a
        href={props.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        &#8194;{props.label}&#8194;
      </a>
    );
  }
}

// ExternalLink.propTypes = {
//   noSpace: PropTypes.bool,
//   href: PropTypes.string.isRequired,
//   label: PropTypes.oneOfType([
//     PropTypes.string,
//     PropTypes.element
//   ]).isRequired
// };
