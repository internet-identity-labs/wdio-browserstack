const { default: $ } = require("webdriverio/build/commands/browser/$");

describe("Testing with Bstackdemo", () => {
  it("add product to cart", async () => {
    await browser.url("https://nfid.dev");
  });
});
