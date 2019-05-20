let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
  framework: 'jasmine',
  directConnect: true,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: [ '--disable-gpu', '--window-size=1000,900']
    }
  },
  specs: ['spec.js'],
  onPrepare: function() {
    jasmine.getEnv().addReporter(new SpecReporter({
      suite: {
        displayNumber: true,
      },
    }));
    browser.waitForAngularEnabled(false);
  }
}
