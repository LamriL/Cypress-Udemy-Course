const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '786hwi',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return require('./cypress/plugins/index.js')(on,config)
    },
    specPattern: '**/*.cy.js',
    baseUrl:'https://react-redux.realworld.io'
  },
});
