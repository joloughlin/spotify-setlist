import Page from '../support/Page'

describe('passing test', () => {
  let page

  beforeEach(() => {
    page = new Page('/login')
  })

  afterEach(() => {
    page.destroy()
  })

  it('should pass', () => {
    expect(page.content()).toMatch('Log In Container')
  })
})
