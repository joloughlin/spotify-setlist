export const createThunk = ({ requestActionType, apiCall }) => {
  return values =>
    (dispatch, getState) => {
      return apiCall({ values, getState }).then(payload =>
        dispatch({ type: `${requestActionType}_SUCCESS`, payload }));
    };
};

export const createReduxFormThunk = ({ requestActionType, apiCall }) => {
  return values =>
    (dispatch, getState) => {
      return apiCall({ values, getState }).then(payload =>
        dispatch({ type: `${requestActionType}_SUCCESS`, payload }));
    };
};
