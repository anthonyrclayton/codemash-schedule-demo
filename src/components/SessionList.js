import React, { Component } from 'react';
import R from 'ramda'
import format from 'date-fns/format'
import Session from './Session';
import { applyFilter } from '../store/reducers/sessions-reducer'
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

class Toggle extends Component {
  constructor(props) {
    super(props)

    this.state = {
      on: props.on === true || false
    }
  }

  toggle(e) {
    e.preventDefault()
    this.setState({on: !this.state.on})
    this.props.onToggle()
  }

  render () {
    return(
      <span className={`toggle ${this.state.on ? 'on' : 'off'}`}>
        { this.state.on }
        <a href="#" onClick={this.toggle.bind(this)}>{this.props.text}</a>
      </span>
    )
  }
}

class SessionFilter extends Component {
  toggleFilter(filter) {
    this.props.applyFilter(filter)
  }

  render() {
    return(
      <div>
        <div className="toggles">
          <Toggle text="Pre-Compiler" onToggle={this.toggleFilter.bind(this, "Pre-Compiler")} />
          <Toggle text="General Session" onToggle={this.toggleFilter.bind(this, "General Session")} />
          <Toggle text="Kids Mash" on={true} onToggle={this.toggleFilter.bind(this, "Kidz Mash")} />
        </div>

        <SessionList sessions={this.props.sessions}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {
    applyFilter: (filter) => dispatch(applyFilter(filter))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionFilter);
