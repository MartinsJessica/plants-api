# Projeto Servidor Express (plants-api)

Este projeto é um servidor web construído com Express.js que fornece endpoints para autenticação e busca de dados de plantas.

## Funcionalidades

- **Autenticação**: O servidor autentica usuários usando um endpoint de autenticação.
- **Rotas**:
  - `GET /`: Rota principal que retorna uma mensagem de boas-vindas.
  - `GET /plants`: Rota que autentica o usuário, obtém um token e retorna dados de plantas.
  - `GET /plants/:id`: Rota que busca uma planta específica pelo ID.
  - `GET /plants/name/:name`: Rota que busca uma planta específica pelo nome.

## Instalação

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```

## Como Rodar o Projeto

1. Inicie o servidor mock:
   - O projeto depende de um servidor mock para autenticação e dados de plantas.
   - Certifique-se de que o servidor mock está rodando na porta `4800`.
   - Navegue até a pasta `mock-plants-api`:
     ```bash
     cd mock-plants-api
     ```
   - Instale o `json-server` globalmente se ainda não o tiver:
     ```bash
     npm install -g json-server
     ```
     Verifique a versão do `node` com o comando `node -v` ou instale, se não tiver:
     ```bash
     nvm install 22
     ```
      Se já tiver instalado atualize a versão 20 pra cima:
     ```bash
     nvm use 22
     ```
   - Inicie o servidor de mock com o comando a baixo:
     ```bash
     node server.js
     ```

2. Inicie o servidor Express:
   - Volte para o diretório raiz do projeto em outro terminal:
     ```bash
     cd ..
     ```
   - Inicie o servidor:
     ```bash
     npm start
     ```

3. Acesse as rotas disponíveis:
   - `GET /`: [http://localhost:3000/](http://localhost:3000/)
   - `GET /plants`: [http://localhost:3000/plants](http://localhost:3000/plants)
   - `GET /plants/:id`: [http://localhost:3000/plants/:id](http://localhost:3000/plants/:id)
   - `GET /plants/name/:name`: [http://localhost:3000/plants/name/:name](http://localhost:3000/plants/name/:name)