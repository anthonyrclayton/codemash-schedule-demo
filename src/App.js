import React, { Component } from 'react';
import SessionList from './components/SessionList';
import { Provider } from 'react-redux';
import store from './store';
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className='App'>

          <div className="App-header">
            <img
              alt="CodeMash"
              src="http://www.codemash.org/wp-content/themes/codemash/images/codemash-icon-featured-box.png"/>
          </div>

          <SessionList />
        </div>
      </Provider>
    );
  }
}

export default App;
