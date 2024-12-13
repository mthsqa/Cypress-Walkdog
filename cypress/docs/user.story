User Story: Cadastro no Walkdog
Título:
Usuário deve conseguir realizar cadastro no Walkdog para oferecer serviços extra como cuidado ou adestramento de pets.

Descrição:
Como um usuário interessado
Eu quero me cadastrar no Walkdog
Para que possa oferecer serviços de cuidado ou adestramento de animais de estimação.

Critérios de Aceitação:

Cadastro bem-sucedido como Cuidador

Quando preencho todos os campos obrigatórios com dados válidos:
Nome completo.
E-mail válido.
CPF válido.
CEP válido e número do endereço.
E escolho a opção "Cuidador".
Então o sistema exibe a mensagem: "Recebemos o seu cadastro e em breve retornaremos o contato".
Cadastro bem-sucedido como Adestrador:

Quando preencho todos os campos obrigatórios com dados válidos:
Nome completo.
E-mail válido.
CPF válido.
CEP válido e número do endereço.
E escolho a opção "Adestrador".
Então o sistema exibe a mensagem: "Recebemos o seu cadastro e em breve retornaremos o contato".
Validação de campos obrigatórios:

Quando não preencho nenhum campo e tento enviar o formulário.
Então o sistema exibe mensagens de erro para cada campo obrigatório:
"Informe o seu nome completo".
"Informe o seu melhor email".
"Informe o seu CPF".
"Informe o seu CEP".
Validação de formato de e-mail inválido:

Dado que insiro um e-mail inválido no campo de e-mail.
Quando tento enviar o formulário.
Então o sistema exibe a mensagem de erro: "Informe um email válido".
Validação de CPF inválido:

Dado que insiro um CPF inválido no campo de CPF.
Quando tento enviar o formulário.
Então o sistema exibe a mensagem de erro: "CPF inválido".
Validação de CEP inválido:

Dado que insiro um CEP inválido no campo de CEP.
Quando tento buscar o endereço com o CEP inválido.
Então o sistema exibe a mensagem de erro: "Informe um CEP válido".



Definição de Pronto (DoD):
 Todos os cenários descritos nos critérios de aceitação foram testados manualmente e automatizados com sucesso.
 Todas as mensagens de erro e validação são exibidas corretamente.
 O sistema responde conforme esperado em cada cenário descrito.