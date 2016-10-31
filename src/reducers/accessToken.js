export const types = {
  LOG_IN_USER: 'LOG_IN_USER'
};

export const logInUser = payload => ({ type: types.LOG_IN_USER, payload });

const accessToken = (state = null, action) => {
  switch (action.type) {
    case types.LOG_IN_USER:
    default:
      return state;
  }
};

export default accessToken;
