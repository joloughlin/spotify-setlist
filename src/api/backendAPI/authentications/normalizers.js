import createNormalizer from 'utils/createNormalizer';
import { authenticationSchema } from '../schemas';

export const normalizeAuthentication = createNormalizer(authenticationSchema);
