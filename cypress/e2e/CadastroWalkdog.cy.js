/// <reference types="Cypress" />
import Cadastro from '../support/pages';
import { ELEMENTS } from '../support/pages/elements';

describe('Testes de Cadastro Walkdog', () => {
  beforeEach(() => {
    cy.viewport(1920, 1080); 
    Cadastro.visitarPagina();
  });

  it('Realizar cadastro com sucesso como Cuidador', () => {
    Cadastro.preencherDadosCadastrais({ role: 'cuidar'});
    Cadastro.verificarMensagemSucesso();
  });

  it('Realizar o cadastro com sucesso como Adestrador', () => {
    Cadastro.preencherDadosCadastrais({ role: 'adestrar' });
    Cadastro.verificarMensagemSucesso();
  });

  it('Realizar o cadastro com sucesso como Cuidador e Adestrador', () => {
    Cadastro.preencherDadosCadastrais({ role: ['adestrar', 'cuidar'] });
    Cadastro.verificarMensagemSucesso();
  });  

  it('Exibir mensagens de erro quando campos obrigatórios não forem preenchidos', () => {
    cy.get(ELEMENTS.submitButton).click();
    Cadastro.verificarMensagemErro('Informe o seu nome completo');
    Cadastro.verificarMensagemErro('Informe o seu melhor email');
    Cadastro.verificarMensagemErro('Informe o seu CPF');
    Cadastro.verificarMensagemErro('Informe o seu CEP');
  });

  it('Exibir mensagem de erro para formato de E-mail inválido', () => {
    cy.get(ELEMENTS.emailInput).type('matheus-qa&exemplo.com');
    cy.get(ELEMENTS.submitButton).click();
    Cadastro.verificarMensagemErro('Informe um email válido');
  });

  it('Exibir mensagem de erro para CPF inválido', () => {
    cy.get(ELEMENTS.cpfInput).type('123456');
    cy.get(ELEMENTS.submitButton).click();
    Cadastro.verificarMensagemErro('CPF inválido');
  });

  it('Exibir mensagem de erro ao buscar um CEP inválido', () => {
    cy.get(ELEMENTS.cepInput).type('123456');
    cy.get(ELEMENTS.buscarCepButton).click();
    Cadastro.verificarMensagemErro('Informe um CEP válido');
  });

  it('Preencher campos obrigatórios e envia o formulário com Sucesso', () => {
    Cadastro.preencherDadosCadastrais({role: 'adestrar' });
      Cadastro.verificarMensagemSucesso();
    });
});
