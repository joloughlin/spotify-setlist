import { branch, renderNothing } from 'recompose';
import { isDevelopment } from 'constants/values';

export default branch(() => !isDevelopment, renderNothing);
