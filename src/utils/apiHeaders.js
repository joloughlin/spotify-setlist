const contentTypeHeader = { 'Content-Type': 'application/json' };
const createAuthorizationHeader = accessToken => ({
  Authorization: `Bearer ${accessToken}`,
});

export const acceptHeader = { Accept: 'application/json' };
export const bodyHeaders = {
  ...acceptHeader,
  ...contentTypeHeader,
};
export const authHeaders = accessToken => ({
  ...acceptHeader,
  ...createAuthorizationHeader(accessToken),
});
export const authBodyHeaders = accessToken => ({
  ...bodyHeaders,
  ...createAuthorizationHeader(accessToken),
});
