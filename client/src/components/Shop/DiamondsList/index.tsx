import * as React from 'react';
import styled from 'react-emotion';
import { graphql, ChildProps } from 'react-apollo';
import gql from 'graphql-tag';
import DiamondCard from './DiamondCard';
import { Diamond } from '../../../lib/interfaces';

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
  onClick: (diamond: Diamond) => void;
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
              <DiamondCard id={diamond._id} onClick={this.props.onClick} />
            </CardSpacing>
          );
        })}
      </Container>
    ) : null;
  }
}

const DiamondsListWithQL = graphql<DiamondsListProps>(
  gql`
    query DiamondsList {
      diamonds {
        _id
      }
    }
  `
)(DiamondsList);

export default DiamondsListWithQL;
