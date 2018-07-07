import * as React from 'react';
import styled from 'react-emotion';
import { DiamondListItem } from './index';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  width: 200px;
  height: 200px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  transition: border-radius 0.2s, box-shadow 0.2s;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
    border-radius: 10px;
  }
`;

const ImageContainer = styled('div')`
  width: 150px;
  height: 150px;
  background-color: white;
`;

const Image = styled('img')`
  width: 150px;
  max-height: 150px;
  object-fit: contain;
`;

const Name = styled('div')`
  font-size: 20px;
`;

class Card extends React.Component<DiamondListItem> {
  public render() {
    return (
      <Container>
        <ImageContainer>
          <Image src={this.props.image} />
        </ImageContainer>
        <Name>{this.props.name} ></Name>
      </Container>
    );
  }
}

export default Card;
