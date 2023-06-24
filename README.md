# Documentação do Projeto

Este documento fornece as instruções necessárias para instalar, executar e usar o projeto de controle de Pokémons.

## Pré-requisitos

Antes de prosseguir, verifique se o seguinte software está instalado em seu sistema:

- [Node.js](https://nodejs.org) (versão 12 ou superior)
- [Yarn](https://yarnpkg.com) (opcional, mas recomendado para instalação de dependências)

Certifique-se de ter acesso à Internet para baixar as dependências do projeto.

## Instalação

Siga as etapas abaixo para instalar as dependências do projeto:

1. Clone o repositório para o seu computador local:
   ```shell
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. Navegue até o diretório do projeto:
   ```shell
   cd nome-do-repositorio
   ```

3. Instale as dependências do projeto utilizando o Yarn ou npm:
   ```shell
   yarn install
   # ou
   npm install
   ```

## Execução

Existem duas maneiras de executar o projeto: utilizando Docker ou executando localmente.

### Executando com Docker

Certifique-se de ter o Docker instalado em sua máquina antes de prosseguir.

1. Certifique-se de estar no diretório raiz do projeto.

2. Execute o seguinte comando para construir e iniciar os contêineres Docker:
   ```shell
   docker-compose up --build
   ```

3. Aguarde até que os contêineres sejam criados e iniciados. O projeto será acessível no seu navegador em `http://localhost:3000`.

### Executando localmente

1. Certifique-se de estar no diretório raiz do projeto.

2. Execute o seguinte comando para iniciar o servidor de desenvolvimento:
   ```shell
   yarn start
   # ou
   npm start
   ```

3. Aguarde até que o servidor de desenvolvimento seja iniciado. O projeto será acessível no seu navegador em `http://localhost:3000`.

## Utilização

Após iniciar o projeto, você será direcionado para a página inicial. A partir daí, você pode utilizar as seguintes funcionalidades:

- Visualização de gráficos com os dados dos Pokémons
- Pesquisar Pokémons utilizando a barra de pesquisa
- Visualizar detalhes de um Pokémon específico no card

## Testes Unitários

Este projeto inclui testes unitários para verificar a funcionalidade do código. Para executar os testes, siga as etapas abaixo:

1. Certifique-se de estar no diretório raiz do projeto.

2. Execute o seguinte comando para iniciar os testes:
   ```shell
   yarn test
   # ou
   npm test
   ```

   Os resultados dos testes serão exibidos no console.

## CI (Integração Contínua)

Este projeto utiliza a integração contínua (CI) para garantir a qualidade do código. O CI é executado automaticamente sempre que houver um push ou pull request no repositório.

O status do CI pode ser verificado na seção "Actions" do repositório no GitHub. Certifique-se de que todos os testes estão passando antes de mesclar as alterações no branch principal.
