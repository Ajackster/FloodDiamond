import * as React from 'react';
import styled from 'react-emotion';
import { Diamond } from '../lib/interfaces';
import { Routes } from '../lib/routes';
import { CreateTransaction } from '../lib/api';

import NavHeader from './NavHeader';
import Footer from './Footer';
import Welcome from './Welcome';
import Shop from './Shop';
import Certificate from './Shop/Certificate';
import LoginModal from './LoginModal';

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
  loginModalOpen: boolean;
  activeRoute: Routes;
  selectedDiamond: Diamond | null;
}

const defaultState: AppState = {
  loginModalOpen: false,
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
        <NavHeader
          loginModalOpen={this.state.loginModalOpen}
          activeRoute={this.state.activeRoute}
          onNavigationChange={this.onNavigationChange}
        />
        <RoutesContainer>
          {this.renderRoute()}
        </RoutesContainer>
        {this.state.loginModalOpen && <LoginModal onLoginModalClose={this.onLoginModalClose} />}
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
            onBuyClick={this.onBuyClick}
            onInfoModalClose={this.onInfoModalClose}
          />
        );
      };
      case Routes.Certificate: {
        return (
          <Certificate diamond={this.state.selectedDiamond as Diamond} />
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

  private onLoginModalClose = () => {
    this.setState({ loginModalOpen: false });
  }

  private onBuyClick = async (diamond: Diamond) => {
    const userId = localStorage.getItem('user-id');
    if (userId) {
      await CreateTransaction({ diamondId: diamond._id, supplierId: diamond.supplierId, userId });
      this.setState({ selectedDiamond: diamond, activeRoute: Routes.Certificate });
    } else {
      this.setState({ loginModalOpen: true });
    }
  }

  private onNavigationChange = (route: Routes) => {
    if (route === this.state.activeRoute) return;
    switch (route) {
      case Routes.Login: {
        this.setState({ loginModalOpen: true });
        break;
      };
      default: {
        localStorage.setItem('last-route', route);
        this.setState({ activeRoute: route });
        break;
      };
    }
  }
}

export default App;
