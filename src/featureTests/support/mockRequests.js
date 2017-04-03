import fetchMock from 'fetch-mock';
import backEndAPIUrl from 'constants/values';
import loginSuccessFixture from 'api/backendAPI/fixtures/loginSuccess.json';

const mockDefaults = {
  DELETE: {},
  GET: {
    ['/try']: { fixture: loginSuccessFixture },
  },
  PATCH: {},
  POST: {
    [`glob:${backEndAPIUrl}/authentications`]: { fixture: loginSuccessFixture },
  },
};

export default (mockOverrides = {}) => {
  const mocks = {
    DELETE: { ...mockDefaults.DELETE, ...mockOverrides.DELETE },
    GET: { ...mockDefaults.GET, ...mockOverrides.GET },
    PATCH: { ...mockDefaults.PATCH, ...mockOverrides.PATCH },
    POST: { ...mockDefaults.POST, ...mockOverrides.POST },
  };

  ['DELETE', 'GET', 'PATCH', 'POST'].map(httpMethod => {
    Object.keys(mocks[httpMethod]).map(mockUrl => {
      const { fixture } = mocks[httpMethod][mockUrl];
      fetchMock[httpMethod.toLowerCase()](mockUrl, fixture);
    });
  });
};
