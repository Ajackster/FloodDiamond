import * as React from 'react';
import styled from 'react-emotion';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';

const query = gql`
  query CertificatesList($id: ID!) {
    myCertificates(id: $id) {
      _id
      name
      diamondName
    }
  }
`;

const Container = styled('div')`
  width: fit-content;
  margin: auto;
  max-width: 60%;
`;

export interface CertificatesProps {
  
}

class Certificates extends React.Component<CertificatesProps> {
  public render() {
    return (
      <Query query={query} variables={{ id: window['userId'] }}>
        {({ loading, error, data }) => {
          if (loading || error || !data) {
            return <div />
          }
          const certificates = data.myCertificates;
          return (
            <Container>
              {certificates.map((cert) => {
                return (
                  <div>{cert.name}  - {cert.diamondName}</div>
                );
              })}
            </Container>
          );
        }}
      </Query>
    );
  }
}

export default Certificates;
