import React, { Component } from 'react';
import Speaker from './Speaker';


export default class Session extends Component {
  constructor (props) {
    super(props)

    this.state = { showDetails: false}
  }

  onToggle (e) {
    e.preventDefault()
    this.setState({showDetails: !this.state.showDetails})
  }

  render () {
    return (
      <li>
        <h3>{ this.props.Title } <a href="#" onClick={ this.onToggle.bind(this) }>{this.state.showDetails ? '-' : '+'}</a></h3>


        { this.state.showDetails && <div>
            <Speaker {...this.props.Speakers[0]} />

            <div>{ this.props.Rooms.join(' - ') } </div>

            <div>
              { this.props.SessionStartTime } - { this.props.SessionStartTime }
            </div>

            <div>
              {this.props.Abstract}
            </div>
          </div>
        }
      </li>
    );
  }
}
