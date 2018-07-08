import * as React from 'react';
import styled from 'react-emotion';
import { CertificateInfo } from '../../lib/interfaces';

const Container = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CongratulationsText = styled('div')`
  font-size: 64px;
  color: #0080ff;
  margin-bottom: 10px;
`;

const SubtitleText = styled('div')`
  font-size: 32px;
  color: #666;
  margin-bottom: 10px;
`;

const OtherInfo = styled('div')`
  font-size: 24px;
  color: #666;
  margin-bottom: 10px;
`;

const FocusText = styled('b')`
  color: #0080ff;
`;

export interface CertificateProps {
  certificate: CertificateInfo;
}

class Certificate extends React.Component<CertificateProps> {
  public render() {
    const { certificate } = this.props;
    return (
      <Container>
        <CongratulationsText>Congratulations!</CongratulationsText>
        <SubtitleText>You have successfully purchased <FocusText>{certificate.diamondName}</FocusText></SubtitleText>
        <OtherInfo>
          Your purchase directly contributes to <FocusText>{certificate.supplierName}</FocusText> and the ethical labor force in <FocusText>{certificate.supplierLocation}</FocusText>
        </OtherInfo>
        <OtherInfo>Your order tracking number is <b>{certificate._id}</b></OtherInfo>
      </Container>
    );
  }
}

export default Certificate;
