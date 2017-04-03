import React, { Component } from 'react';
import { connect } from 'react-redux';
import { currentUser } from 'utilities/selectors';
import Header from 'components/Header';
import { deleteAuthentication } from 'reducers/authentication';

class HeaderContainer extends Component {
  handleLogOutClick = () => {
    this.props.deleteAuthentication();
  };

  render() {
    return (
      <Header
        currentUser={this.props.currentUser}
        onLogOutClick={this.handleLogOutClick}
      />
    );
  }
}

const mapStateToProps = state => ({
  currentUser: currentUser(state),
});

export default connect(mapStateToProps, { deleteAuthentication })(
  HeaderContainer,
);
