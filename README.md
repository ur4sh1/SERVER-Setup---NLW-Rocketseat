#Exercício de Node
<h1 align="center">:file_cabinet: API - Setup</h1>

## :memo: Descrição
Projeto criado no evento da Rocketseat NLW-Setup

## :books: Funcionalidades
* Servidor node para comunicação ao banco de dados

## :wrench: Tecnologias utilizadas
* Node.js

## :rocket: Rodando o projeto
Para rodar o repositório é necessário clonar o mesmo, dar o seguinte comando para iniciar o projeto:
```
git clone github.com/ur4sh1/SERVER-Setup---NLW-Rocketseat.git
```
Instalar o npm
```
npm i
```
Executar
```
npm run dev
```

## :wrench: Histórico de comandos

Iniciando o projeto node
```
npm init -y
```
Instalando o fastify
```
npm i fastify
```
Instalando o typescript como dependencia de desenvolvimento
```
npm i typescript -D
```



Criando o arquivo de sintax tsconfig do typescript
```
npx tsc --init
```
Instalando o tsx como dependencia de desenvolvimento
```
npm i tsx -D
```
Instalando o prisma como dependencia de desenvolvimento
```
npm i prisma -D
```
Instalando o @prisma/client
```
npm i @prisma/client
```
Instalando plugin SQLite
```
npx prisma init --datasource-provider SQLite
```
Comando de criação de tabela com o prisma
```
npx prisma migrate dev
```
Comando para vizualizar o banco de dados pelo prisma no navegador
```
npx prisma studio
```
Instalando ERD Generator como dependencia de desenvolvimento
```
npm i prisma-erd-generator @mermaid-js/mermaid-cli -D
```
Inserir este codigo no schema.prisma
```
generator erd {
  provider = "prisma-erd-generator"
}
```
Executar o erd generator
```
npx prisma generate
```
Instalar o @fastify/cors (mecanismo de segurança que valida quem pode consumir ou não a API)
```
npm i @fastify/cors
```
Instalando o zod (schema validation)
```
npm i zod
```
Instalando o short-unique-id (gerador de id's únicos)
```
npm i short-unique-id
```
Instalando o node-fetch
```
npm i node-fetch
```
Instalando jwt
```
npm i @fastify/jwt
```