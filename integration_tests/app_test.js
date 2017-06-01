module.exports = {
  'Demo test' : function (browser) {
    browser
      .url('localhost:8080')
      .waitForElementVisible('body', 1000)
      .end();
  }
};
