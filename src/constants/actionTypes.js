export default [
  'CREATE_AUTHENTICATION_REQUEST',
  'DELETE_AUTHENTICATION',
].reduce(
  (types, type) => {
    if (type.endsWith('REQUEST')) {
      const failureType = `${type}_FAILURE`;
      const successType = `${type}_SUCCESS`;
      return {
        ...types,
        [type]: type,
        [failureType]: failureType,
        [successType]: successType,
      };
    }

    return { ...types, [type]: type };
  },
  {},
);
