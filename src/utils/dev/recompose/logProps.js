import React from 'react';

export default BaseComponent => props => {
  console.log(props);
  return <BaseComponent {...props} />;
};
