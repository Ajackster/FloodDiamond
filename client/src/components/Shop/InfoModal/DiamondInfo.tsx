import * as React from 'react';
import styled from 'react-emotion';
import { Diamond } from '../../../lib/interfaces';
import CollapsibleItem from '../../UI/CollapsibleItem';

const Container = styled('div')`
`;

const Name = styled('div')`
  font-size: 20px;
  color: #444;
  text-align: center;
`;

const Image = styled('img')`
  width: 90%;
  max-height: 90%;
  object-fit: contain;
`;

const Price = styled('div')`
  font-size: 18px;
  color: #0080ff;
`;

const Description = styled('div')`
  font-size: 16px;
  color: #222;
`;

export interface DiamondInfoProps {
  diamond: Diamond;
}

class DiamondInfo extends React.Component<DiamondInfoProps> {
  public render() {
    const { diamond } = this.props;
    return (
      <Container>
        <Name>{diamond.name}</Name>
        <Image src={diamond.image} />
        <CollapsibleItem title='Price'>
          <Price>The price of this diamond is: ${diamond.price}</Price>
        </CollapsibleItem>
        <CollapsibleItem title='Description'>
          <Description>{diamond.description}</Description>
        </CollapsibleItem>
      </Container>
    );
  }
}

export default DiamondInfo;
