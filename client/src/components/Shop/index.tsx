import * as React from 'react';
import styled from 'react-emotion';
import DiamondsList from './DiamondsList';
import InfoModal from './InfoModal';
import { Diamond } from '../../lib/interfaces';

const ContentContainer = styled('div')`
  width: fit-content;
  margin: auto;
`;

export interface ShopProps {
  selectedDiamond: Diamond | null;
  onDiamondCardClick: (diamond: Diamond | null) => void;
  onInfoModalClose: () => void;
}

class Shop extends React.Component<ShopProps> {
  public render() {
    return (
      <ContentContainer>
        <DiamondsList onClick={this.props.onDiamondCardClick} />
        <InfoModal diamond={this.props.selectedDiamond} onInfoModalClose={this.props.onInfoModalClose} />
      </ContentContainer>
    );
  }
}

export default Shop;
