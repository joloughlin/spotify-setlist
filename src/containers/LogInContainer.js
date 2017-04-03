import React, { Component } from 'react';
import { connect } from 'react-redux';
import LogIn from 'components/LogIn';
import { createAuthentication } from 'reducers/authentication';
import { push } from 'react-router-redux';

class LogInContainer extends Component {
  onSubmit = values => this.props.createAuthentication(values);
  onSubmitSuccess = () => {
    const { from } = this.props.location.state || { from: { pathname: '/' } };
    this.props.push(from);
  };

  render() {
    return (
      <LogIn onSubmit={this.onSubmit} onSubmitSuccess={this.onSubmitSuccess} />
    );
  }
}

export default connect(null, { createAuthentication, push })(LogInContainer);
