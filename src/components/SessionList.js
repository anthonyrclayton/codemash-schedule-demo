import React, { Component } from 'react';
import R from 'ramda'
import format from 'date-fns/format'
import Session from './Session';
import { updateSessions } from '../store/actions';
import { connect } from 'react-redux';

class TimeSlot extends Component {
  render() {
    const { sessions, time } = this.props;
    const timeFormat = format(time, 'H:mm - MMM Do')

    return(
      <div className="time">

        <div className="header"><h2>{timeFormat}</h2></div>

        <ul>
          { sessions.map((s) => {return <Session key={s.Id} {...s}/>;})}
        </ul>
      </div>
  )
  }
}
class SessionList extends Component {
  componentDidMount() {
    const url = 'https://speakers.codemash.org/api/sessionsdata';

    fetch(url).then((r) => r.json().then(this.props.updateSessions))
      .catch(console.error);
  }

  render() {
    let { sessions, loading } = this.props;

    if (loading) return <div><h1>Loading....</h1></div>;
    const keys = R.keys(sessions)

    return(
      <div>
        { keys.map((k) => <TimeSlot key={k} time={k} sessions={sessions[k]}/>) }
      </div>
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
