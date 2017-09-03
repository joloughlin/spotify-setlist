import React from 'react';

export default function ToJSON(props) {
  return <pre>{JSON.stringify(props, null, 2)}</pre>;
}
