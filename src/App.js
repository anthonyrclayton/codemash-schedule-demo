import React, { Component } from 'react';
import "./App.css";
import SessionList from './components/SessionList';

class App extends Component {
  render() {
    return (
      <div className='App'>

        <div className="App-header">
          <img alt="CodeMash" src="http://www.codemash.org/wp-content/themes/codemash/images/codemash-icon-featured-box.png"/>
        </div>

        <SessionList />
      </div>
    );
  }
}

export default App;
