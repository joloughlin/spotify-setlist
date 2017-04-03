import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { currentUser } from 'utilities/selectors';
import { replace } from 'react-router-redux';

class AuthenticationContainer extends Component {
  componentWillReceiveProps(nextProps) {
    if (!nextProps.currentUser) {
      this.props.replace('/login', { from: this.props.routeProps.location });
    }
  }

  componentDidMount() {
    if (!this.props.currentUser) {
      this.props.replace('/login', { from: this.props.routeProps.location });
    }
  }

  render() {
    const { component, currentUser, routeProps } = this.props;
    return currentUser ? React.createElement(component, routeProps) : null;
  }
}
const mapStateToProps = state => ({
  currentUser: currentUser(state),
});
AuthenticationContainer = connect(mapStateToProps, { replace })(
  AuthenticationContainer,
);

export default class AuthRoute extends Component {
  static propTypes = {
    component: PropTypes.func.isRequired,
    path: PropTypes.string.isRequired,
    exact: PropTypes.bool,
    strict: PropTypes.bool,
  };

  routeRender = routeProps => {
    return (
      <AuthenticationContainer
        routeProps={routeProps}
        component={this.props.component}
      />
    );
  };

  render() {
    const { path, exact, strict } = this.props;
    const routeProps = { path, exact, strict };
    return <Route {...routeProps} render={this.routeRender} />;
  }
}
