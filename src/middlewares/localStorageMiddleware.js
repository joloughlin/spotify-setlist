import { clearLocalStorage, setLocalStorage } from 'utilities/localStorage';
import types from 'constants/actionTypes';

export default store =>
  next =>
    action => {
      const result = next(action);
      if (action.type === types.CREATE_AUTHENTICATION_REQUEST_SUCCESS) {
        setLocalStorage(store.getState());
      }
      if (action.type === types.DELETE_AUTHENTICATION) {
        clearLocalStorage();
      }
      return result;
    };
