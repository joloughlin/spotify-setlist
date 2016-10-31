import createObjectFromFixture from './createObjectFromFixture';

export const createOkResponse = fixtureFilename => {
  let fixture = createObjectFromFixture(fixtureFilename);
  let responseBody = JSON.stringify(fixture);
  let response = new Response(responseBody, {
    status: 200,
    statusText: 'OK',
    headers: { 'Content-Type': 'application/json' }
  });
  return Promise.resolve(response);
};

export const createNoContentResponse = () => {
  let response = new Response(undefined, {
    status: 204,
    statusText: 'No Content'
  });
  return Promise.resolve(response);
};
