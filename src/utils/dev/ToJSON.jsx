import React from 'react';

export const ToJSON = props => <pre>{JSON.stringify(props, null, 2)}</pre>;
