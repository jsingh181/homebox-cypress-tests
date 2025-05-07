// const { defineConfig } = require("cypress");
// const createBundler = require('@bahmutov/cypress-esbuild-preprocessor');
// const addCucumberPreprocessorPlugin = require('@badeball/cypress-cucumber-preprocessor').addCucumberPreprocessorPlugin;
// const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild').createEsbuildPlugin;

// module.exports = defineConfig({
//   e2e: {
//     baseUrl: 'https://qa-practice.netlify.app',
//     scrollBehavior: false,
//     specPattern: [
//       'cypress/e2e/**/*.{js,ts}', // Classic cypress tests
//       'cypress/e2e/**/*.feature' // BDD .feature tests
//     ],
//     async setupNodeEvents(on, config) {
//       await addCucumberPreprocessorPlugin(on, config);
//       on(
//         'file:preprocessor',
//         createBundler({
//         plugins: [createEsbuildPlugin(config)],
//       }));
//       return config;
//     },
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//   },
//   viewportHeight: 1080,
//   viewportWidth: 1400,
// });

const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const addCucumberPreprocessorPlugin =
  require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin =
  require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qa-practice.netlify.app',
    scrollBehavior: false,
    viewportHeight: 1080,
    viewportWidth: 1400,
    specPattern: [
      "cypress/e2e/**/*.cy.{js,ts}",
      "cypress/e2e/**/*.feature",
    ],
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      return config;
    },
  },
});
