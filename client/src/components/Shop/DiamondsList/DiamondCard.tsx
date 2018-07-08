import * as React from 'react';
import styled, { keyframes } from 'react-emotion';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Loading from '../../UI/Loading';
import Button from '../../UI/Button';
import { Diamond } from '../../../lib/interfaces';

const query = gql`
  query DiamondCard($id: ID!) {
    diamond(id: $id) {
      supplierId
      image
      name
      carat
      description
      price
    }
  }
`;

const FadeInAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled('div')`
  position: relative;
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
  -webkit-user-select: none;
  user-select: none;
  opacity: 0;
  -webkit-animation: ${FadeInAnimation} 0.5s forwards;
  animation: ${FadeInAnimation} 0.5s forwards;
  &:hover {
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    .ui-button-view {
      background-color: #0080ff;
      color: white;
    }
    .diamond-name .fa-arrow-right {
      color: #0080ff;
    }
  }
`;

const Price = styled('div')`
  position: absolute;
  top: 5px;
  left: 5px;
  color: #666;
  font-weight: bold;
`;

const ImageContainer = styled('div')`
  width: 150px;
  height: 150px;
  background-color: white;
`;

const Image = styled('img')`
  width: 150px;
  min-height: 150px;
  object-fit: contain;
`;

const Name = styled('div')`
  font-size: 16px;
  font-weight: bold;
  color: #666;
  border-top: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 45px;
`;

const ButtonContainer = styled('div')`
  position: absolute;
  top: 5px;
  right: 5px;
`;

export interface DiamondCardProps {
  id: string;
  selectedDiamond: Diamond | null;
  onClick: (diamond: Diamond) => void;
  onBuyClick: (diamond: Diamond) => void;
}

export interface DiamondCardState {
  mouseOver: boolean;
}

class DiamondCard extends React.Component<DiamondCardProps, DiamondCardState> {
  constructor(props: DiamondCardProps) {
    super(props);
    this.state = {
      mouseOver: false,
    };
  }

  public render() {
    return (
      <Query query={query} variables={{ id: this.props.id }}>
        {({ loading, error, data }) => {
          if (loading || error || !data) {
            return (
              <Container><Loading /></Container>
            );
          }
          const diamond = data.diamond;
          return (
            <Container
              onClick={() => this.props.onClick(diamond)}
              onMouseOver={this.onMouseOver}
              onMouseLeave={this.onMouseLeave}>
              <ButtonContainer>
                <Button text={'Buy'} onClick={() => this.props.onBuyClick(diamond)} />
              </ButtonContainer>             
              <Price>${diamond.price}</Price>
              <ImageContainer>
                <Image src={diamond.image} draggable={false} />
              </ImageContainer>
              <Name className='diamond-name'>
                {diamond.name}
                &nbsp;<span className='fa fa-arrow-right'></span>
              </Name>
            </Container>
          );
        }}
      </Query>
    );
  }

  private onMouseOver = () => {
    this.setState({ mouseOver: true });
  }

  private onMouseLeave = () => {
    this.setState({ mouseOver: false });
  }
}

export default DiamondCard;
