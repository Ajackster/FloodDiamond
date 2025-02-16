import * as React from 'react';
import styled, { keyframes } from 'react-emotion';

const FadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled('div')`
  -webkit-animation: ${FadeIn} 0.2s forwards;
  animation: ${FadeIn} 0.2s forwards;
`;

const Overlay = styled('div')`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
`;

const ModalContainer = styled('div')`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  padding: 5px;
  overflow: auto;
  width: ${(props: { width: number, height: number }) => props.width}px;
  height: ${(props: { width: number, height: number }) => props.height}px;
  background-color: white;
`;

export interface ModalProps {
  width: number;
  height: number;
  onClose: () => void;
  modalClass?: string;
}

class Modal extends React.Component<ModalProps> {
  public render() {
    return (
      <Container>
        <Overlay onClick={this.props.onClose} />
        <ModalContainer width={this.props.width} height={this.props.height} className={this.props.modalClass}>
          {this.props.children}
        </ModalContainer>
      </Container>
    );
  }
}

export default Modal;
