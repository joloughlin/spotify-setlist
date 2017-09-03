import types from 'constants/actionTypes';

const initialState = {
  jwt: null,
  user: null,
};

const authentication = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.CREATE_AUTHENTICATION_REQUEST_SUCCESS:
      return payload.entities.authentications[payload.result];
    case types.DELETE_AUTHENTICATION:
      return initialState;
    default:
      return state;
  }
};

export default authentication;
