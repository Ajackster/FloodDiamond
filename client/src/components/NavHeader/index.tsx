import * as React from 'react';
import styled from 'react-emotion';

const Container = styled('div')`
  display: flex;
  align-items: center;
  height: 50px;
  margin-bottom: 5px;
  padding: 0 5px;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.1);
`;

const Logo = styled('div')`
  width: 30px;
  height: 30px;
  line-height: 30px;
  border-radius: 10px;
  background-color: #0080ff;
  color: white;
  text-align: center;
`;

const NavItemContainer = styled('div')`
  margin-left: 10px;
`;

const NavItem = styled('div')`
  display: inline-block;
  color: #666;
  font-weight: bold;
  font-size: 14px;
  margin-right: 10px;
  line-height: 20px;
  border-bottom: 2px solid transparent;
  cursor: pointer;
  &:hover {
    color: #0080ff;
    border-bottom: 2px solid #0080ff;
  }
`;

export interface NavHeaderProps {

}

class NavHeader extends React.Component<NavHeaderProps> {
  public render() {
    return (
      <Container>
        <Logo>fD</Logo>
        <NavItemContainer>
          <NavItem>Welcome</NavItem>
          <NavItem>Shop</NavItem>
          <NavItem>About</NavItem>
        </NavItemContainer>
      </Container>
    );
  }
}

export default NavHeader;
