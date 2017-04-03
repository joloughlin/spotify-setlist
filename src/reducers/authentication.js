import types from 'constants/actionTypes';
import { createReduxFormThunk } from 'utilities/createThunk';
import backendAPI from 'api/backendAPI';

const initialState = {
  jwt: null,
  user: null,
};

export const deleteAuthentication = () => ({
  type: types.DELETE_AUTHENTICATION,
});
export const createAuthentication = createReduxFormThunk({
  requestActionType: types.CREATE_AUTHENTICATION_REQUEST,
  apiCall: backendAPI.authentications.create,
});

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
