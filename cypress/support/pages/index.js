import { ELEMENTS } from '../../support/pages/elements'; 

class Cadastro {
  visitarPagina() {
    cy.visit('https://walkdog.vercel.app/');
    cy.get('a').click();
  }

  preencherDadosCadastrais({ name, email, cpf, cep, addressNumber, addressDetails, role }) {
    // Definindo os dados de cadastro aqui
    const dadosCadastro = {
      name: 'Matheus Silva',
      email: 'walkdog@exemplo.com',
      cpf: '00000014141',
      cep: '71925000',
      addressNumber: '1000',
      addressDetails: 'Apto 102',
    };

    // Espera o modal ou alerta desaparecer
    cy.get('.swal2-container').should('not.exist');

    // Preencher os campos de cadastro com os dados
    cy.get(ELEMENTS.nameInput).type(dadosCadastro.name);
    cy.get(ELEMENTS.emailInput).type(dadosCadastro.email);
    cy.get(ELEMENTS.cpfInput).type(dadosCadastro.cpf);
    cy.get(ELEMENTS.cepInput).type(dadosCadastro.cep);
    cy.get(ELEMENTS.buscarCepButton).click();

    // Espera o modal desaparecer após buscar CEP
    cy.get('.swal2-container').should('not.exist');

    cy.get(ELEMENTS.addressNumberInput).type(dadosCadastro.addressNumber);
    cy.get(ELEMENTS.addressDetailsInput).type(dadosCadastro.addressDetails);

    // Seleciona a opção de função com base no 'role'
    if (role === 'cuidar') {
      cy.get(ELEMENTS.cuidarOption).click();
    } else if (role === 'adestrar') {
      cy.get(ELEMENTS.adestrarOption).click();
    }

    // Envia o arquivo PNG
    cy.get(ELEMENTS.fileInput).selectFile('./cypress/fixtures/document.png', { force: true });
    
    // Envia o formulário
    cy.get(ELEMENTS.submitButton).click();
  }

  verificarMensagemSucesso() {
    cy.get(ELEMENTS.alertMessage)
      .contains('Recebemos o seu cadastro e em breve retornaremos o contato')
      .should('be.visible');
  }

  verificarMensagemErro(mensagem) {
    cy.contains(mensagem).should('be.visible');
  }
}

export default new Cadastro();
