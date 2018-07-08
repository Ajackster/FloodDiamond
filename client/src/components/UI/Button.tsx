import * as React from 'react';
import styled from 'react-emotion';

const ButtonView = styled('div')`
  background-color: #eee;
  text-align: center;
  height: 20px;
  line-height: 20px;
  width: 40px;
  border-radius: 5px;
  font-size: 12px;
  opacity: 0.9;
  -webkit-transition: background-color 0.1s, color 0.1s;
  transition: background-color 0.1s, color 0.1s;
  &:hover {
    opacity: 1;
  }
  &:active {
    box-shadow: inset 0 0 2px rgba(0, 0, 0, 0.2);
  }
`;

export interface ButtonProps {
  text: string;
  onClick: () => void;
}

class Button extends React.Component<ButtonProps> {
  public render() {
    return (
      <ButtonView className={'ui-button-view'} onClick={this.onClick}>
        {this.props.text}
      </ButtonView>
    );
  }

  private onClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    this.props.onClick();
  }
}

export default Button;
