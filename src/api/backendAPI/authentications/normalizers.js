import { createNormalizer } from 'utils';
import { authenticationSchema } from '../schemas';

export const normalizeAuthentication = createNormalizer(authenticationSchema);
