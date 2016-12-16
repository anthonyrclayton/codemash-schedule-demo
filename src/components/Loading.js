import React, { Component } from 'react';
import { connect } from 'react-redux';

class Loading extends Component {
  render() {
    if (this.props.loading) return (<div>Loading...</div>);

    return(
      <div>
        { this.props.children }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { loading } = state;
  return { loading };
};

export default connect(mapStateToProps)(Loading);
