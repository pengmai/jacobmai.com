import React from 'react';
import { Thumbnail } from 'react-bootstrap';

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

interface ExternalPreviewProps {
  href: string;
  src: string;
  caption: string;
}

export function ExternalPreview(props: ExternalPreviewProps) {
  return (
    <a
      className="preview"
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <figure>
        <Thumbnail src={props.src}/>
        <span className="caption">
          <span>{props.caption}</span>
        </span>
      </figure>
    </a>
  );
}
