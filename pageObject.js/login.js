class login {
    async email() {
        return await page.$('input[id="user-name"]')
    }
    async password_fill(test) {
        return await page.type('input[id="password"]')
    }
    async signInButton_click() {
        return await page.click('input[id = "login-button"]');
    }
}

module.exports = login