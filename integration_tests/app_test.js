module.exports = {
  'Demo test' : function (browser) {
    browser
      .url('localhost:8080')
      .waitForElementVisible('body', 1000)
      .assert.containsText('h1', 'Trending Github Languages')
      /* Run tests with `npm run test:integration` */
      .end();
  }
};
