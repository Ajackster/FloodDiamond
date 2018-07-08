import * as React from 'react';
import styled from 'react-emotion';

const Container = styled('div')`

`;

const CongratulationsText = styled('div')`
  font-size: 64px;
  color: #0080ff;
`;

export interface CertificateProps {

}

class Certificate extends React.Component<CertificateProps> {
  public render() {
    return (
      <Container>
        <CongratulationsText>Congratulations!</CongratulationsText>
        
      </Container>
    );
  }
}

export default Certificate;
