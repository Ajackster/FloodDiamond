import * as React from 'react';
import styled from 'react-emotion';
import { Routes } from '../../lib/routes';
import NavItem from '../UI/NavItem';

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

export interface NavHeaderProps {
  activeRoute: Routes;
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
    const { activeRoute } = this.props;
    return (
      <Container>
        <Logo>
          {this.state.showSpinner ?
            <div className='la-ball-atom la-sm'>
              <div />
              <div />
              <div />
              <div />
            </div>
            :
            'fD'
          }
        </Logo>
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
