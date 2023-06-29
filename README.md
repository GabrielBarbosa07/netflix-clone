# Construindo um Clone Netflix Fullstack com React, NextJS, TailwindCSS e Prisma

![image](https://user-images.githubusercontent.com/23248726/220005380-ede4fb14-0b8d-4582-a063-3cc4beeccfb7.png)

Este é um repositório para um FullStack Netflix Clone usando React, NextJS, TailwindCSS e Prisma.

Características:

- Variáveis de ​​ambiente, Typescript, NextJS
- MongoDB e conexão com Prisma, criação de banco de dados
- Autenticação com Next Auth, Google e Github Login
- Capacidade de responsividade total em todas as páginas
- Autenticação baseada em cookies
- Criação de API e Controllers
- Efeitos e animações orientados a detalhes usando TailwindCSS
- React SWR data fetching
- Gerenciamento do estado com Zustand

### Pré-requisitos

**Versão do Node 14.x**

### Clonando o repositório

```shell
git clone https://github.com/GabrielBarbosa07/netflix-clone.git
```

### Instalar pacotes

```shell
npm i
```

### Setup do arquivo .env


```js
DATABASE_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_JWT_SECRET=
NEXTAUTH_SECRET=
```

### Inicie o app

```shell
npm run dev
```

## Comandos disponíveis

Executando comandos com npm `npm run [comando]`

| comando         | descrição                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Inicia uma instância de desenvolvimento do aplicativo |
