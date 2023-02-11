DataDriven = require("../DataDriven/data.json");

describe("Post", () => {
  beforeAll(async () => {
    await page.goto(DataDriven.url);
    await console.log("before all");
  });

  test("Sign In", async () => {
    const title = await page.title();
    // expect(title).toBe("Sauce");
    // await page.goto("https://www.saucedemo.com/");
    await page.fill('input[id = "user-name"]', DataDriven.name);
    await page.fill('input[id = "password"]', DataDriven.password);
    await page.click('input[id = "login-button"]');

    console.log(DataDriven.password);
  });

  afterAll(async () => {
    await browser.close();
    await console.log("after all");
  });
});
