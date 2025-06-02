const { defineConfig } = require('cypress');


module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    reportDir: 'report/html',
    overwrite: true,
    html: true,
    json: true,
    embeddedScreenshots: true,
    inlineAssets: true
  },
  video: false,
  screenshotOnRunFailure: true,
  e2e: {
    baseUrl: 'https://www.saucedemo.com/',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
