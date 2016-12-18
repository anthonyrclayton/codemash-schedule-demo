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
      <div className="sectionTitle">
        <span className="title">
          { this.props.Title }
          <a href="#" onClick={ this.onToggle.bind(this) }>{this.state.showDetails ? '-' : '+'}</a>
        </span>
        <span className="room">{ this.props.Rooms.join(' - ') }</span>
      </div>

        { this.state.showDetails && <div className="details">
            <Speaker {...this.props.Speakers[0]} />
            <div> {this.props.Abstract} </div>
          </div>
        }

        <div>
          { this.props.Tags.map(t => <span className='tag'>{t}</span>)}
        </div>

      </li>
    );
  }
}
