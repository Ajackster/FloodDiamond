import * as React from 'react';
import DiamondsList from './DiamondsList';

export interface AppProps {

}

class App extends React.Component<AppProps> {
  public render() {
    return <DiamondsList />;
  }
}

export default App;
