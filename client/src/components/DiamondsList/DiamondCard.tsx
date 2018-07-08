import * as React from 'react';
import styled from 'react-emotion';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import Loading from '../UI/Loading';
import { Diamond } from '../../lib/interfaces';

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
  &:hover {
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.4);
    border-radius: 10px;
    .diamond-name .fa-arrow-right {
      color: #0080ff;
    }
  }
  &:active {
    box-shadow: 0 0 5px 3px rgba(0, 0, 0, 0.4);
  }
`;

const Price = styled('div')`
  position: absolute;
  top: 5px;
  left: 5px;
  color: #008543;
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
  color: #444;
  border-top: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 45px;
`;

export interface DiamondCardProps {
  id: string;
  onClick: (diamond: Diamond) => void;
}

class DiamondCard extends React.Component<DiamondCardProps> {
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
            <Container onClick={() => this.props.onClick(diamond)}>
              <Price>${diamond.price}</Price>
              <ImageContainer>
                <Image src={diamond.image} />
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
}

export default DiamondCard;
