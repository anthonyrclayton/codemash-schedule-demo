import React, { Component } from 'react';
import Session from './Session';

export default class SessionList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      sessions: []
    };
  }

  componentDidMount() {
    const url = 'https://speakers.codemash.org/api/sessionsdata';
    const _that = this;

    fetch(url).then((r) => {
      r.json().then((json) => {
        _that.setState({
          loading: false,
          sessions: json
        });
      })
    }).catch(console.error);
  }

  render() {
    let { sessions } = this.state;

    if (this.state.loading) return <div><h1>Loading....</h1></div>;

    return(
        <ul>
        { sessions.map((s) => {return <Session key={s.Id} {...s}/>;})
        }
      </ul>
    );
  }
}
