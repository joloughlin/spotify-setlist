import React from 'react';

export const consoleLogProps = Component => props => {
  console.log({ props });
  return <Component {...props} />;
};
