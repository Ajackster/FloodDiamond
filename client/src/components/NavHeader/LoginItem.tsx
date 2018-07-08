import * as React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Routes } from '../../lib/routes';
import NavItem from '../UI/NavItem';

const query = gql`
  query LoginItem($id: ID!) {
    user(id: $id) {
      name
    }
  }
`;

export interface LoginItemProps {
  activeRoute: Routes;
  loginModalOpen: boolean;
  onNavigationChange: (route: Routes) => void;
}

export interface LoginItemState {
  userId: string;
}

class LoginItem extends React.Component<LoginItemProps, LoginItemState> {
  constructor(props: LoginItemProps) {
    super(props);
    this.state = {
      userId: '',
    };
  }

  public render() {
    return !this.state.userId ? (
      <NavItem
        active={this.props.loginModalOpen}
        route={Routes.Login}
        text={'Log in'}
        onClick={this.props.onNavigationChange}
      />
    ) : (
      <Query query={query} variables={{ id: this.state.userId }}>
        {({ loading, error, data }) => {
          if (loading || error || !data) {
            return null;
          }

          const user = data.user;
          return (
            <NavItem
              active={this.props.activeRoute === Routes.Certificates}
              route={Routes.Certificates}
              text={user.name}
              onClick={this.props.onNavigationChange}
            /> 
          );
        }}
      </Query>
    );
  }

  public componentDidMount() {
    this.checkIfLoggedIn();
  }

  private checkIfLoggedIn = () => {
    const userId = localStorage.getItem('user-id');
    if (userId) {
      this.setState({ userId });
      return;
    }
  }
}

export default LoginItem;
