export const env = process.env.NODE_ENV;
export const isDevelopment = env === 'development';
export const isStaging = env === 'staging';
export const isProduction = env === 'production';
export const backEndAPIUrl = process.env.REACT_APP_BACK_END_API_URL;
export const localStorageKey = 'MyAppName';
