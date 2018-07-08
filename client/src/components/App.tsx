import * as React from 'react';
import styled from 'react-emotion';

import { Diamond } from '../lib/interfaces';
import NavHeader from './NavHeader';
import DiamondsList from './DiamondsList';
import InfoModal from './InfoModal';

const Container = styled('div')`
  width: 100%;
  height: 100%;
`;

const ContentContainer = styled('div')`
  height: calc(100% - 50px);
  width: fit-content;
  margin: auto;
`;

export interface AppProps {

}

export interface AppState {
  selectedDiamond: Diamond | null;
}

const defaultState: AppState = {
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
        <NavHeader />
        <ContentContainer>
          <DiamondsList onClick={this.onDiamondCardClick} />
          <InfoModal diamond={this.state.selectedDiamond} onInfoModalClose={this.onInfoModalClose} />
        </ContentContainer>
      </Container>
    );
  }

  private onDiamondCardClick = (diamond: Diamond) => {
    this.setState({ selectedDiamond: diamond });
  }

  private onInfoModalClose = () => {
    this.setState({ ...defaultState });
  }
}

export default App;
