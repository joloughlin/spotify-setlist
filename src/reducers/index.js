import { combineReducers } from 'redux';
import authentication from 'reducers/authentication';
import { routerReducer as router } from 'react-router-redux';
import { reducer as form } from 'redux-form';
import users from 'reducers/users';

const rootReducer = combineReducers({
  authentication,
  form,
  router,
  users,
});

export default rootReducer;
