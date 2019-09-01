import React from 'react';
import { CardImg } from 'react-bootstrap';

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

// interface PageHeaderProps {
//   children: any;
// }
export function PageHeader(props: any) {
  return (
    <div className="pb-2 mt-4 mb-2 border-bottom page-header text-center" {...props}>
      <h1>
        {props.children}
      </h1>
    </div>
  );
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
        <CardImg src={props.src}/>
        <span className="caption">
          <span>{props.caption}</span>
        </span>
      </figure>
    </a>
  );
}
