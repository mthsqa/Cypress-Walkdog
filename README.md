# Projeto de Automação Walkdog 🐾

<p align="center">
  <img src="https://github.com/user-attachments/assets/ad7c9ba6-2cbc-4f29-b61f-4dc0de100394)](https://github.com/user-attachments/assets/340a0663-eb8c-4c28-8163-90df7f4ccb47" alt="Walkdog" width="70%">
</p>


Este repositório contém a suíte de testes automatizados desenvolvida para o WebApp [Walkdog]([https://walkdog.com/](https://walkdog.vercel.app/)), que permite aos usuários oferecer serviços de cuidado e adestramento para animais de estimação.

## 🎯 Objetivo
O objetivo do projeto é criar uma automação que simule o fluxo de cadastro de cuidadores e adestradores de pets na plataforma Walkdog, garantindo uma experiência de cadastro sem falhas. A aplicação foca em validar o preenchimento correto dos campos obrigatórios e o comportamento do sistema com dados válidos e inválidos.

## 🏗️ Arquitetura
Os testes foram desenvolvidos utilizando Cypress, com uma estrutura organizada baseada em boas práticas como Page Object para encapsular interações e cenários parametrizados para personalizar dados de entrada, garantindo flexibilidade, manutenção e reutilização do código.

    CYPRESS-WALKDOG/  
    ├── cypress/  
    │   ├── docs/             # Documentação e histórias de usuário  
    │   ├── e2e/              # Testes automatizados End-to-End  
    │   ├── fixtures/         # Dados e arquivos auxiliares  
    │   ├── github/           # Configuração CI/CD (GitHub Actions)  
    │   ├── support/          # Page Objects e comandos customizados  
    │   └── .gitignore        # Exclusões do controle de versão  
    ├── node_modules/         # Dependências do Node.js  
    ├── cypress.config.js     # Configuração principal do Cypress  
    ├── merged-report.json    # Relatório consolidado dos testes  
    └── package.json          # Gerenciamento de dependências e scripts  

## 💻 Tecnologias
- Cypress
- JavaScript
- Node.js

## ✅ Testes Implementados
Foram desenvolvidos cenários de testes para o fluxo de cadastro de cuidadores e adestradores de pets, incluindo validações e verificações de mensagens de erro. Os testes cobrem os seguintes cenários:

- **Cadastro como Cuidador:** Validação do cadastro com dados válidos para a função de cuidador de pets.
- **Cadastro como Adestrador:** Validação do cadastro com dados válidos para a função de adestrador de pets.
- **Cadastro como Cuidador e Adestrador:** Validação do cadastro para usuários que oferecem ambos os serviços.
- **Validação de Campos Obrigatórios:** Verificação de mensagens de erro quando campos obrigatórios não são preenchidos.
- **Validação de Formato de E-mail Inválido:** Mensagem de erro quando o E-mail não é válido.
- **Validação de CPF Inválido:** Mensagem de erro quando o CPF informado não é válido.
- **Validação de CEP Inválido:** Mensagem de erro quando o CEP informado é inválido.


### 🌲 Virtual Environment
É recomendado o uso de um ambiente virtual para garantir que todas as dependências sejam instaladas corretamente. Para configurar o ambiente, siga as instruções abaixo.


## 📋 Pré-requisitos 
- Node.js
- Cypress configurado
- Navegador compatível:
  - Electron (nativo do Cypress)
  - Chrome ou Firefox (suporta execução em modo headless)


### Configurações ⚙️
As configurações do navegador e outras preferências podem ser ajustadas diretamente no arquivo de configuração do Cypress.

### Executando os Testes ✔️
Para executar todos os testes, utilize o seguinte comando:

```bash
npm install
npx cypress open
npx cypress run
