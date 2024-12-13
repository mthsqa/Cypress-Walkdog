const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      
    },
  },
  reporter: "mochawesome",
  reporterOptions: {
    reportDir: "cypress/reports",   // Diretório para salvar os relatórios
    overwrite: false,              // Não sobrescreve relatórios anteriores
    html: true,                    // Gera relatório em HTML
    json: true                     // Gera relatório em JSON
  }
});
