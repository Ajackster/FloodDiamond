import * as React from 'react';
import styled from 'react-emotion';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Loading from '../../UI/Loading';
import DescriptiveField from '../../UI/DescriptiveField';

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
  background: #eee;
  padding: 5px;
  border-radius: 5px;
  height: 100%;
`;

const Name = styled('div')`
  font-size: 14px;
  font-weight: bold;
  color: #888;
`;

const Description = styled('div')`
  font-size: 14px;
  color: #888;
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
            <DescriptiveField header='About the supplier'>
              <Name>{supplier.name} - {supplier.location}</Name>
              <Description>{supplier.description}</Description>
            </DescriptiveField>
          );
        }}
      </Query>
    );
  }
}

export default SupplierInfo;
