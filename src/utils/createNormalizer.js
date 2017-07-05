import { normalize } from 'normalizr';
import { camelizeKeys } from 'humps';

export default schema => data => {
  const camelizedData = camelizeKeys(data);
  return normalize(camelizedData, schema);
};
