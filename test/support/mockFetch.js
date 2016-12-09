import { createOkResponse } from './responseCreators'

export const mockFetch = config => {
  spyOn(global, 'fetch').and.callFake((url, options) => {
    const httpMethod = options.method ? options.method.toLowerCase() : 'get'
    const mockInformation = config[httpMethod] &&
      config[httpMethod].find(mockInformation => mockInformation.url === url)
    if (mockInformation) {
      return createOkResponse(mockInformation.fixture)
    } else {
      expect(mockInformation).toBeDefined()
    }
  })
}
