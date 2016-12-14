import React, { Component } from 'react';
import R from 'ramda'
import format from 'date-fns/format'
import Session from './Session';
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
  render() {
    let { sessions } = this.props;

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

export default connect(mapStateToProps)(SessionList);
