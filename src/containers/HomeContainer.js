import React, { Component } from 'react';
import { connect } from 'react-redux';
import { currentUser } from 'utilities/selectors';

class HomeContainer extends Component {
  render() {
    return (
      <div>
        <h1>Home Container Component</h1>
        {this.props.currentUser &&
          <span>Sign in as: {this.props.currentUser.email}</span>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: currentUser(state),
});

export default connect(mapStateToProps)(HomeContainer);
