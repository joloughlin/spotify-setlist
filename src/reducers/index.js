import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authentication from 'reducers/authentication';
import users from 'reducers/users';

const rootReducer = combineReducers({
  authentication,
  form,
  users,
});

export default rootReducer;
