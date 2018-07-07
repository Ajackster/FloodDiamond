import * as React from 'react';
import styled from 'react-emotion';
import { graphql, ChildProps } from 'react-apollo';
import gql from 'graphql-tag';
import Card from './Card';

const Container = styled('div')`
  display: flex;
  flex-wrap: wrap;
`;

const CardSpacing = styled('div')`
  margin: 5px;
`;

export interface DiamondListItem {
  _id: string;
  name: string;
  image: string;
  carat: number;
}

export interface DiamondsListProps extends ChildProps<{}, { diamonds: DiamondListItem[] }> {

}

export interface DiamondsListState {

}

class DiamondsList extends React.Component<DiamondsListProps, DiamondsListState> {
  public render() {
    return this.props.data && this.props.data.diamonds ? (
      <Container>
        {this.props.data.diamonds.map((diamond) => {
          return (
            <CardSpacing key={diamond._id}>
              <Card
                _id={diamond._id}
                name={diamond.name}
                image={diamond.image}
                carat={diamond.carat}
              />
            </CardSpacing>
          );
        })}
      </Container>
    ) : null;
  }
}

const DiamondsListWithQL = graphql(
  gql`
    query DiamondsList {
      diamonds {
        _id
        name
        image
        carat
      }
    }
  `
)(DiamondsList);

export default DiamondsListWithQL;
