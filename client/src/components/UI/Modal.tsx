import * as React from 'react';
import styled from 'react-emotion';

const Container = styled('div')`
  position: fixed;
  width: ${(props: { width: number, height: number }) => props.width}px;
  height: ${(props: { width: number, height: number }) => props.height}px;
`;

const Overlay = styled('div')`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

export interface ModalProps {
  width: number;
  height: number;
  onClose: () => void;
}

class Modal extends React.Component<ModalProps> {
  public render() {
    return (
      <Container width={this.props.width} height={this.props.height}>
        <Overlay onMouseDown={this.props.onClose} />
        {this.props.children}
      </Container>
    );
  }
}

export default Modal;
