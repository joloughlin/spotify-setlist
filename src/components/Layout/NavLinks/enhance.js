import { connect } from 'react-redux';
import * as authenticationActions from 'reducers/authentication/actions';
import { isAuthenticated } from 'reducers/authentication/selectors';
import combineSelectors from 'utils/combineSelectors';

const mapStateToProps = combineSelectors({
  isAuthenticated,
});

export default connect(mapStateToProps, authenticationActions);
