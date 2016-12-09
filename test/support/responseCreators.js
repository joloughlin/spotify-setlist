import createObjectFromFixture from './createObjectFromFixture'

export const createOkResponse = fixtureFilename => {
  const fixture = createObjectFromFixture(fixtureFilename)
  const responseBody = JSON.stringify(fixture)
  const response = new Response(responseBody, {
    status: 200,
    statusText: 'OK',
    headers: { 'Content-Type': 'application/json' },
  })
  return Promise.resolve(response)
}

export const createNoContentResponse = () => {
  const response = new Response(undefined, {
    status: 204,
    statusText: 'No Content',
  })
  return Promise.resolve(response)
}
