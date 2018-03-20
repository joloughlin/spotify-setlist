export const createSelector = ({ idPropName, reducer }) => (state, props) => {
  const id = props[idPropName];
  return state[reducer].byId[id];
};
