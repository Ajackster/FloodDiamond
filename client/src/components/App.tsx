import * as React from 'react';
import styled from 'react-emotion';
import { Diamond } from '../lib/interfaces';
import { Routes } from '../lib/routes';

import NavHeader from './NavHeader';
import Footer from './Footer';
import Welcome from './Welcome';
import Shop from './Shop';

const Container = styled('div')`
  width: 100%;
  height: 100%;
`;

const RoutesContainer = styled('div')`
  height: calc(100% - 80px);
  width: 100%;
`;

export interface AppProps {

}

export interface AppState {
  activeRoute: Routes;
  selectedDiamond: Diamond | null;
}

const defaultState: AppState = {
  activeRoute: Routes.Welcome,
  selectedDiamond: null,
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    this.state = defaultState;
  }
  public render() {
    return (
      <Container>
        <NavHeader activeRoute={this.state.activeRoute} onNavigationChange={this.onNavigationChange} />
        <RoutesContainer>
          {this.renderRoute()}
        </RoutesContainer>
        <Footer />
      </Container>
    );
  }

  private renderRoute = () => {
    switch (this.state.activeRoute) {
      case Routes.Welcome: {
        return <Welcome />;
      };
      case Routes.Shop: {
        return (
          <Shop
            selectedDiamond={this.state.selectedDiamond}
            onDiamondCardClick={this.onDiamondCardClick}
            onInfoModalClose={this.onInfoModalClose}
          />
        );
      };
      default: {
        return (
          <div></div>
        );
      };
    }
  }

  public componentDidMount() {
    this.initRoute();
  }

  private initRoute = () => {
    const lastRoute = localStorage.getItem('last-route');
    if (lastRoute) {
      this.setState({ activeRoute: lastRoute as Routes });
    }
  }

  private onDiamondCardClick = (diamond: Diamond) => {
    this.setState({ selectedDiamond: diamond });
  }

  private onInfoModalClose = () => {
    this.setState({ selectedDiamond: null });
  }

  private onNavigationChange = (route: Routes) => {
    if (route === this.state.activeRoute) return;
    localStorage.setItem('last-route', route);
    this.setState({ activeRoute: route });
  }
}

export default App;
