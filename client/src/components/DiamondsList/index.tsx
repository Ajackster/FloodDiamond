import * as React from 'react';
import styled from 'react-emotion';
import { graphql, ChildProps } from 'react-apollo';
import gql from 'graphql-tag';
import DiamondCard from './DiamondCard';

const Container = styled('div')`
  display: flex;
  flex-wrap: wrap;
`;

const CardSpacing = styled('div')`
  margin: 5px;
`;

export interface DiamondListItem {
  _id: string;
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
              <DiamondCard id={diamond._id} />
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
      }
    }
  `
)(DiamondsList);

export default DiamondsListWithQL;
