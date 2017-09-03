import { schema } from 'normalizr';

export const userSchema = new schema.Entity('users');
export const authenticationSchema = new schema.Entity('authentications', {
  user: userSchema,
});
