import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
    // Ignora erros específicos de rede relacionados ao Axios
    if (err.message.includes('Network Error')) {
      return false; // Previne que o Cypress falhe o teste
    }
  });
  
