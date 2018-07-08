import * as React from 'react';
import styled from 'react-emotion';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from '../../UI/Loading';

const query = gql`
  query InfoModal($id: ID!) {
    supplier(id: $id) {
      location
      image
      name
      description
    }
  }
`;

const Container = styled('div')`

`;

const Image = styled('img')`
  max-width: 100%;
  height: 150px;
  object-fit: contain;
`;

export interface SupplierInfoProps {
  supplierId: string;
}

class SupplierInfo extends React.Component<SupplierInfoProps> {
  public render() {
    return (
      <Query query={query} variables={{ id: this.props.supplierId }}>
        {({ loading, error, data }) => {
          if (loading || error || !data) {
            return (
              <Container>
                <Loading />
              </Container>
            )
          }

          const supplier = data.supplier;
          return (
            <Container>
              <Image src={supplier.image} />
              <div>Location: {supplier.location}</div>
              <div>{supplier.name}</div>
              <div>{supplier.description}</div>
            </Container>
          );
        }}
      </Query>
    );
  }
}

export default SupplierInfo;
