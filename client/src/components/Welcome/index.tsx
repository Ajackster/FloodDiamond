import * as React from 'react';
import styled, { keyframes } from 'react-emotion';

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #0080ff;
  height: 100%;
  font-weight: bold;
`;

const WelcomeTextAnimation = keyframes`
  from {
    opacity: 0;
    top: -20px;
  }
  to {
    opacity: 1;
    top: 0;
  }
`;

const WelcomeText = styled('div')`
  position: relative;
  font-size: 75px;
  top: -20px;
  opacity: 0;
  -webkit-animation: ${WelcomeTextAnimation} 0.7s forwards;
  animation: ${WelcomeTextAnimation} 0.7s forwards;
  -webkit-animation-delay: 0.3s;
  animation-delay: 0.3s;
`;

const GladTextAnimation = keyframes`
  from {
    opacity: 0;
    bottom: -20px;
  }
  to {
    opacity: 1;
    bottom: 0px;
  }
`;

const GladText = styled('div')`
  position: relative;
  font-size: 25px;
  bottom: -20px;
  opacity: 0;
  -webkit-animation: ${GladTextAnimation} 0.7s forwards;
  animation: ${GladTextAnimation} 0.7s forwards;
  -webkit-animation-delay: 0.9s;
  animation-delay: 0.9s;
`;

export interface WelcomeProps {

}

class Welcome extends React.Component<WelcomeProps> {
  public render() {
    return (
      <Container>
        <WelcomeText>Welcome</WelcomeText>
        <GladText>We're glad you're here</GladText>
      </Container>
    );
  }
}

export default Welcome;
