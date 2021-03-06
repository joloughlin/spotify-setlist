import { normalize } from 'normalizr';
import { camelizeKeys } from 'humps';

export const createNormalizer = schema => data => {
  const camelizedData = camelizeKeys(data);
  return normalize(camelizedData, schema);
};
