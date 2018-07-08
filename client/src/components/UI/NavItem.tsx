import * as React from 'react';
import styled from 'react-emotion';
import { Routes } from '../../lib/routes';

const Item = styled('div')`
  display: inline-block;
  color: ${(props: { active: boolean }) => props.active ? '#0080ff' : '#666'};
  font-weight: bold;
  font-size: 14px;
  margin-right: 10px;
  line-height: 20px;
  border-bottom: ${(props: { active: boolean }) => props.active ? '2px solid #0080ff' : '2px solid transparent'};
  cursor: pointer;
  &:hover {
    color: #0080ff;
    border-bottom: 2px solid #0080ff;
  }
`;

export interface NavItemProps {
  active: boolean;
  route: Routes;
  onClick: (route: Routes) => void;
}

class NavItem extends React.Component<NavItemProps> {
  public render() {
    return (
      <Item active={this.props.active} onClick={this.onClick}>{this.props.route}</Item>
    );
  }

  private onClick = () => {
    this.props.onClick(this.props.route);
  }
}

export default NavItem;
