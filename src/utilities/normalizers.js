import { normalize, schema } from 'normalizr';
import { camelizeKeys } from 'humps';

const userSchema = new schema.Entity('users');
const authenticationSchema = new schema.Entity('authentications', {
  user: userSchema,
});

export const normalizeAuthentication = data => {
  const camelizedData = camelizeKeys(data);
  return normalize(camelizedData, authenticationSchema);
};
