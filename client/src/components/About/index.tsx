import * as React from 'react';
import styled, { keyframes } from 'react-emotion';
import IconLink from '../UI/IconLink';

const Container = styled('div')`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FadeInUp = keyframes`
  from {
    opacity: 0;
    margin-bottom: -50px;
  }
  to {
    opacity: 1;
    margin-bottom: 5px;
  }
`;

const FadeInDown = keyframes`
  from {
    opacity: 0;
    margin-top: -50px;
  }
  to {
    opacity: 1;
    margin-top: 5px;
  }
`;

const FabriceItemContainer = styled('div')`
  position: relative;
  margin: 5px;
  -webkit-animation: ${FadeInUp} 0.4s ease-in forwards;
  animation: ${FadeInUp} 0.4s ease-in forwards;
`;

const AndrewItemContainer = styled('div')`
  position: relative;
  margin: 5px;
  -webkit-animation: ${FadeInDown} 0.4s ease-in forwards;
  animation: ${FadeInDown} 0.4s ease-in forwards;
`;

const Image = styled('img')`
  width: 400px;
  height: 400px;
  object-fit: contain;
`;

const Description = styled('div')`
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: #666;
`;

export interface AboutProps {

}

class About extends React.Component<AboutProps> {
  public render() {
    return (
      <Container>
        <AndrewItemContainer>
          <Image src={'../images/me.jpg'} />
          <Description>Andrew Jackson <IconLink href={'https://github.com/Ajackster'} className={'fab fa-github'} /></Description>
        </AndrewItemContainer>
        <FabriceItemContainer>
          <Image src={'../images/fabrice.jpg'} />
          <Description>Fabrice Mulumba <IconLink href={'https://github.com/Fabreeze23'} className={'fab fa-github'} /></Description>
        </FabriceItemContainer>
      </Container>
    );
  }
}

export default About;
