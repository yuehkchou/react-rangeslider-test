import React from 'react';
import { render } from 'react-dom';
import Main from './components/main/Main';

class App extends React.Component {
  constructor( props ) {
    super( props );
  }

  render() {
    return (
      <div className="app">
        <Main/>
      </div>
    )
  }
}
render(<App />, document.getElementById('app'));
