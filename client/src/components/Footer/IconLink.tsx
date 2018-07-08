import * as React from 'react';
import styled from 'react-emotion';

const A = styled('a')`
  color: #666 !important;
`;

const Icon = styled('span')`
  font-size: 16px;
  cursor: pointer;
  margin-left: 5px;
  &:hover {
    color: #0080ff;
  }
`;

export interface IconLinkProps {
  className: string;
  href: string;
}

class IconLink extends React.Component<IconLinkProps> {
  public render() {
    return (
      <A target='_blank' href={this.props.href}>
        <Icon className={this.props.className} />
      </A>
    );
  }
}

export default IconLink;
