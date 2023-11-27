const { defineConfig } = require("cypress");

module.exports = defineConfig({
  screenshotsFolder: "cypress/reports/mochareports/assets",
  projectId: '786hwi',
  "reporter": "cypress-multi-reporters",
  "reporterOptions":{
    "reporterEnabled": "mochawesome",
    "mochawesomeReporterOptions":{
      "reportDir":"cypress/reports/mocha",
      "quiet": true,
      "overwrite": false,
      "html": false,
      "json": true
    }
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return require('./cypress/plugins/index.js')(on,config)
    },
    specPattern: '**/*.cy.js',
    baseUrl:'https://react-redux.realworld.io'
  },
});
