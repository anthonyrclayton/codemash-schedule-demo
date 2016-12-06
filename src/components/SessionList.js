import React, { Component } from 'react';
import Session from './Session';
import { updateSessions } from '../store/actions';
import { connect } from 'react-redux';

class SessionList extends Component {
  componentDidMount() {
    const url = 'https://speakers.codemash.org/api/sessionsdata';

    fetch(url).then((r) => r.json().then(this.props.updateSessions))
      .catch(console.error);
  }

  render() {
    let { sessions, loading } = this.props;

    if (loading) return <div><h1>Loading....</h1></div>;

    return(
      <ul>
        { sessions.map((s) => {return <Session key={s.Id} {...s}/>;})}
      </ul>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateSessions: (data) => dispatch(updateSessions(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionList);
