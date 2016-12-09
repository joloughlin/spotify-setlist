const createObjectFromFixture = fixtureFilename => {
  const data = window.__fixtures__[fixtureFilename]
  expect(data).toBeDefined()
  return data
}
export default createObjectFromFixture
