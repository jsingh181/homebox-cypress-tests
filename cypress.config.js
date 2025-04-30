const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qa-practice.netlify.app',
    scrollBehavior: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  viewportHeight: 1080,
  viewportWidth: 1400,
});
