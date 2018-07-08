import * as React from 'react';
import styled from 'react-emotion';
import { Diamond } from '../../../lib/interfaces';
import DescriptiveField from '../../UI/DescriptiveField';

const Container = styled('div')`
`;

const ImageContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled('img')`
  width: 200px;
  max-height: 200px;
  object-fit: contain;
`;

const Description = styled('div')`
  font-size: 14px;
  color: #888;
`;

export interface DiamondInfoProps {
  diamond: Diamond;
}

class DiamondInfo extends React.Component<DiamondInfoProps> {
  public render() {
    const { diamond } = this.props;
    return (
      <Container>
        <ImageContainer>
          <Image src={diamond.image} draggable={false} />
        </ImageContainer>
        <DescriptiveField header='About the diamond'>
          <Description><b>Price:</b> {diamond.price} USD</Description>
          <Description><b>Weight:</b> {diamond.carat} ct</Description>
          <Description>{diamond.description}</Description>
        </DescriptiveField>
      </Container>
    );
  }
}

export default DiamondInfo;
