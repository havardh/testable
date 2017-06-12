module.exports = {
  'Demo test' : function (browser) {
    browser
      .url('localhost:8080')
      .waitForElementVisible('body', 1000)
      /* Step 1) Assert that the h1 with text 'Trending Github Languages' is present */
      /* Try the .assert.containsText(element, text) */
      /* Run tests with `npm run test:integration` */
      .end();
  }
};
