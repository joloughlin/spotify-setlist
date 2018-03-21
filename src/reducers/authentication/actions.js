import { createRejectableThunk } from 'utils';
import * as backendAPI from 'api/backendAPI/authentications';
import types from 'constants/actionTypes';

export const logOut = () => ({ type: types.DELETE_AUTHENTICATION });

export const logIn = createRejectableThunk({
  apiCall: backendAPI.create,
  type: types.CREATE_AUTHENTICATION_REQUEST,
});
