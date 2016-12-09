import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { propTypes as RouterPropTypes } from 'react-router'

class SignUpContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    isExact: PropTypes.bool.isRequired,
    location: RouterPropTypes.location.isRequired,
    params: PropTypes.object.isRequired,
    pathname: PropTypes.string.isRequired,
    pattern: PropTypes.string.isRequired,
  }

  render() {
    return <h1>Sign Up Container Component</h1>
  }
}

export default connect()(SignUpContainer)
