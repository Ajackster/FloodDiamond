import * as React from 'react';
import styled from 'react-emotion';
import { Diamond } from '../../../lib/interfaces';

const Container = styled('div')`

`;

export interface CertificateProps {
  diamond: Diamond;
}

class Certificate extends React.Component<CertificateProps> {
  public render() {
    return (
      <Container>
        
      </Container>
    );
  }
}

export default Certificate;
