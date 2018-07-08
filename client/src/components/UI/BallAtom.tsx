import * as React from 'react';
import styled from 'react-emotion';

export interface BallAtomProps {
  color: string;
}

const Container = styled('div')`
  & > div {
    background-color: ${(props: BallAtomProps) => props.color};
  }
  & > div:nth-child(1) {
    background: ${(props: BallAtomProps) => props.color};
  }
  & > div:not(:nth-child(1)):before {
    background: ${(props: BallAtomProps) => props.color};
  }
`;

class BallAtom extends React.Component<BallAtomProps> {
  public render() {
    return (
      <Container color={this.props.color} className='la-ball-atom'>
        <div />
        <div />
        <div />
        <div />
      </Container>
    );
  }
}

export default BallAtom;
