import * as React from 'react';
import styled from 'react-emotion';
import { Routes } from '../../lib/routes';
import NavItem from '../UI/NavItem';
import LoginItem from './LoginItem';

const Container = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  margin-bottom: 5px;
  padding: 0 5px;
  box-shadow: 0 1px 2px 1px rgba(0, 0, 0, 0.1);
`;

const Logo = styled('div')`
  width: 35px;
  height: 35px;
  line-height: 35px;
  border-radius: 18px;
  background-color: #0080ff;
  color: white;
  text-align: center;
  cursor: pointer;
`;

const NavItemContainer = styled('div')`
  margin-left: 10px;
`;

const Side = styled('div')`
  display: flex;
  align-items: center;
  height: 100%;
`;

export interface NavHeaderProps {
  activeRoute: Routes;
  loginModalOpen: boolean;
  onNavigationChange: (route: Routes) => void;
}

export interface NavHeaderState {
  showSpinner: boolean;
}

class NavHeader extends React.Component<NavHeaderProps, NavHeaderState> {
  // private spinnerTimeout: number;
  constructor(props: NavHeaderProps) {
    super(props);
    this.state = {
      showSpinner: false,
    };
  }

  public render() {
    const { activeRoute, loginModalOpen } = this.props;
    return (
      <Container>
        <Side>
          <Logo onClick={() => this.onNavigationChange(Routes.Shop)}>FD</Logo>
          <NavItemContainer>
            <NavItem
              active={activeRoute === Routes.Welcome}
              route={Routes.Welcome}
              onClick={this.onNavigationChange}  
            />
            <NavItem
              active={activeRoute === Routes.Shop}
              route={Routes.Shop}
              onClick={this.onNavigationChange}
            />
            <NavItem
              active={activeRoute === Routes.About}
              route={Routes.About}
              onClick={this.onNavigationChange}  
            />
          </NavItemContainer>
        </Side>
        <Side>
          <LoginItem
            activeRoute={activeRoute}
            loginModalOpen={loginModalOpen}
            onNavigationChange={this.onNavigationChange}
          />
        </Side>
      </Container>
    );
  }

  private onNavigationChange = (route: Routes) => {
    this.props.onNavigationChange(route);
    // this.handleSpinner();
  }

  // private handleSpinner = () => {
  //   if (this.spinnerTimeout) {
  //     clearTimeout(this.spinnerTimeout);
  //   }
  //   this.setState({ showSpinner: true });
  //   this.spinnerTimeout = window.setTimeout(() => {
  //     this.setState({ showSpinner: false });
  //   }, 400);
  // }
}

export default NavHeader;
