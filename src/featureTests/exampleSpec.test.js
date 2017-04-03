import createRootPage from './support/createRootPage';
import mockRequests from './support/mockRequests';
import fetchMock from 'fetch-mock';

describe('passing test', () => {
  let page;

  beforeEach(() => {
    mockRequests();
    page = createRootPage();
  });

  afterEach(() => {
    fetchMock.restore();
  });

  it('should pass', () => {
    expect(page.content()).toMatch('Home Container Component');
  });
});
