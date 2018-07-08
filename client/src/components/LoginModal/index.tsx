import * as React from 'react';
import styled, { css } from 'react-emotion';
import Modal from '../UI/Modal';
import Input from '../UI/Input';
import { Login } from '../../lib/api';

const ContentContainer = styled('div')`
  display: flex;
  flex-direction: column;
`;

const ModalClass = css`
  border-radius: 5px;
`;

const Text = styled('div')`
  font-size: 24px;
  color: #0080ff;
  text-align: center;
  margin-bottom: 5px;
  font-weight: bold;
`;

const InputSpacing = css`
  margin-bottom: 5px;
`;

const Button = styled('div')`
  background-color: #3fda8a;
  color: white;
  padding: 7px 0px;
  border-radius: 2px;
  text-align: center;
  box-shadow: 1px 2px 2px rgba(0, 0, 0, 0.2);
  align-self: stretch;
  margin-top: 10px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    filter: brightness(110%);
  }
  &:active {
    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.3);
  }
`;

const ErrorText = styled('div')`
  font-size: 12px;
  color: red;
`;

export interface LoginModalProps {
  onLoginModalClose: () => void;
}

export interface LoginModalState {
  usernameVal: string;
  passwordVal: string;
  error: string;
}

class LoginModal extends React.Component<LoginModalProps, LoginModalState> {
  constructor(props: LoginModalProps) {
    super(props);
    this.state = {
      usernameVal: '',
      passwordVal: '',
      error: '',
    };
  }
  public render() {
    return (
      <Modal width={300} height={165} onClose={this.props.onLoginModalClose} modalClass={ModalClass}>
        <ContentContainer>
          <Text>Log in</Text>
          <Input
            placeholder='Username'
            value={this.state.usernameVal}
            onChange={this.onUsernameChange}
            className={InputSpacing}
          />
          <Input
            placeholder='Password'
            type='password'
            value={this.state.passwordVal}
            onChange={this.onPasswordChange}
            className={InputSpacing}
          />
          <ErrorText>{this.state.error}</ErrorText>
          <Button onClick={this.onLogin}>Submit</Button>
        </ContentContainer>
      </Modal>
    );
  }

  private onLogin = async () => {
    const res = await Login({ username: this.state.usernameVal, password: this.state.passwordVal });
    if (res.data && res.data.userId) {
      this.props.onLoginModalClose();
      localStorage.setItem('user-id', res.data.userId);
      this.setState({ error: '' });
    } else {
      this.setState({ error: 'There was an error' });
    }
  }

  private onUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ usernameVal: e.target.value });
  }

  private onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ passwordVal: e.target.value });
  }
}

export default LoginModal;
