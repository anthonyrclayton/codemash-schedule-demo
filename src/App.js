import React, { Component } from 'react';
import SessionList from './components/SessionList';
import Loading from './components/Loading';
import { Provider } from 'react-redux';
import store from './store';
import { updateSessions } from './store/actions';
import "./App.css";

class App extends Component {
  componentDidMount() {
    const url = 'https://speakers.codemash.org/api/sessionsdata';


    const callback =  (data) => store.dispatch(updateSessions(data))
    fetch(url).then((r) => r.json().then(callback))
      .catch(console.error);
  }

  render() {
    return (
      <Provider store={store}>
        <div className='App'>

          <div className="App-header">
            <img
              alt="CodeMash"
              src="http://www.codemash.org/wp-content/themes/codemash/images/codemash-icon-featured-box.png"/>
          </div>

          <Loading>
            <SessionList />
          </Loading>
        </div>
      </Provider>
    );
  }
}

export default App;
