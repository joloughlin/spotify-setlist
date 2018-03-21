import { connect } from 'react-redux';
import { isAuthenticated, logIn, logOut } from 'reducers/authentication';
import { combineSelectors } from 'utils';

const mapStateToProps = combineSelectors({
  isAuthenticated,
});

const mapDispatchToProps = {
  logIn,
  logOut,
};

export default connect(mapStateToProps, mapDispatchToProps);
