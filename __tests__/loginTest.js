Login = require('../pageObject.js/login');

describe('Post', () => {

  const login = new Login()

  beforeAll(async () => {
    await page.goto('https://www.saucedemo.com/')
  })

  test('Sign In', async () => {
    const title = await page.title()
    //expect(title).toBe('Sauce')

    // Enter credentials to sign in
    const email = await login.email()
    await email.fill('standard_user')
    await login.password_fill('secret_sauce')
    await login.signInButton_click()

    // Verify successful sign in
    const html = await page.innerHTML('.feed-toggle')
    expect(html).toMatch('Your Feed')
  })

  afterAll(async () => {
    await browser.close()
  })

})