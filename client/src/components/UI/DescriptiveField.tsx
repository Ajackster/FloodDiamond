import * as React from 'react';
import styled from 'react-emotion';

const Container = styled('div')`
  position: relative;
  background: #eee;
  padding: 20px 5px 5px 20px;
  margin-bottom: 5px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
`;

const Header = styled('div')`
  position: absolute;
  top: 5px;
  left: 5px;
  font-size: 12px;
  color: #0080ff;
  font-weight: bold;
`;

export interface DescriptiveFieldProps {
  header: string;
}

class DescriptiveField extends React.Component<DescriptiveFieldProps> {
  public render() {
    return (
      <Container>
        <Header>{this.props.header}</Header>
        {this.props.children}
      </Container>
    );
  }
}

export default DescriptiveField;
