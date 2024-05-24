const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    watchForFileChanges: false, //supaya tidak auto run
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //BASE URL agar hanya mengakses web itu saja, tetap harus ada cy.visit tpi kosongkan aja cy.visit('')
   // baseUrl: 'https://demowebshop.tricentis.com/register',
    screenshotOnRunFailure: false,
    pageLoadTimeout: 120000, // Menetapkan timeout menjadi 120 detik (120000 ms)
    requestTimeout: 120000, // menunggu permintaan jaringan hingga 120 detik
    responseTimeout: 120000, // menunggu respons jaringan hingga 120 detik
  },
});
