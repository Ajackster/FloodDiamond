import * as React from 'react';
import styled from 'react-emotion';
import IconLink from '../UI/IconLink';

const Container = styled('div')`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: #666;
  border-top: 1px solid #eee;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.5px;
`;

export interface FooterProps {

}

class Footer extends React.Component<FooterProps> {
  public render() {
    return (
      <Container>
        Support the people who want to make the world a better place
        <IconLink href={'https://github.com/Ajackster/FloodDiamond'} className={'fab fa-github'} />
      </Container>
    );
  }
}

export default Footer;
