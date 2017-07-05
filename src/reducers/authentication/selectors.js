export const currentUser = state => state.users.byId[state.authentication.user];
export const isAuthenticated = state => state.authentication.user;
