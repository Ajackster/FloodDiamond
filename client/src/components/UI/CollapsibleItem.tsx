import * as React from 'react';
import styled from 'react-emotion';

const Container = styled('div')`
`;

const Header = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 45px;
  background-color: #444;
  color: #fff;
  cursor: pointer;
  padding: 0 5px;
  margin-bottom: 5px;
  &:hover {
    background-color: #555;
  }
  &:active {
    box-shadow: inset 0 0 5px 2px rgba(0, 0, 0, 0.5);
  }
`;

export interface CollapsibleItemProps {
  title: string;
  defaultCollapsed?: boolean;
}

export interface CollapsibleItemState {
  collapsed: boolean;
}

class CollapsibleItem extends React.Component<CollapsibleItemProps, CollapsibleItemState> {
  constructor(props: CollapsibleItemProps) {
    super(props);
    this.state = {
      collapsed: props.defaultCollapsed || true,
    };
  }

  public render() {
    return (
      <Container>
        <Header onClick={this.onToggleCollapse}>
          {this.props.title}
          <div>{this.state.collapsed ? '+' : '-'}</div>
        </Header>
        {this.state.collapsed ? null : this.props.children}
      </Container>
    );
  }

  private onToggleCollapse = () => {
    this.setState({ collapsed: !this.state.collapsed });
  }
}

export default CollapsibleItem;
