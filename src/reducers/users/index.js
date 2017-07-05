import types from 'constants/actionTypes';
import { combineReducers } from 'redux';

const initialState = {
  byId: {},
};

const byId = (state = initialState.byId, { type, payload }) => {
  switch (type) {
    case types.CREATE_AUTHENTICATION_REQUEST_SUCCESS:
      return { ...state, ...payload.entities.users };
    default:
      return state;
  }
};

export default combineReducers({
  byId,
});
