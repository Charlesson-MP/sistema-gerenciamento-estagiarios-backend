<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

### 1 - Criação do banco de dados

  Antes de iniciar a codificação do backend do projeto, criei a estrutura do banco de dados com as seguintes tabelas:
  ```bash
  CREATE TABLE IF NOT EXISTS public.usuarios
(
    id character varying(1) COLLATE pg_catalog."default" NOT NULL,
    nome character(60) COLLATE pg_catalog."default" NOT NULL,
    email character(60) COLLATE pg_catalog."default" NOT NULL,
    telefone character(11) COLLATE pg_catalog."default" NOT NULL,
    perfil character(20) COLLATE pg_catalog."default" NOT NULL,
    status character(20) COLLATE pg_catalog."default" NOT NULL,
    senha character(200) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT id_usuario PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.usuarios
    OWNER to postgres;

  CREATE TABLE IF NOT EXISTS public.contratos
(
    id character varying COLLATE pg_catalog."default" NOT NULL,
    id_usuario character varying COLLATE pg_catalog."default" NOT NULL,
    modalidade character(20) COLLATE pg_catalog."default" NOT NULL,
    data_inicio date NOT NULL,
    data_fim date NOT NULL,
    data_recisao date,
    CONSTRAINT contratos_pkey PRIMARY KEY (id),
    CONSTRAINT id_usuario FOREIGN KEY (id_usuario)
        REFERENCES public.usuarios (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

CREATE TABLE IF NOT EXISTS public.solicitacao_ferias
(
    id character varying COLLATE pg_catalog."default" NOT NULL,
    id_contrato character varying COLLATE pg_catalog."default" NOT NULL,
    data_inicio date NOT NULL,
    data_fim date NOT NULL,
    status character(20) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT solicitacao_ferias_pkey PRIMARY KEY (id),
    CONSTRAINT id_contrato FOREIGN KEY (id_contrato)
        REFERENCES public.contratos (id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.solicitacao_ferias
    OWNER to postgres;

  ```

### 2 - Configuração do prisma

Nesta fase do projeto instalei o prisma, o inicializei com os comandos:
```bash
npm install -D prisma
npx prisma init (Necessário instalar o prisma client através do comando "npm install @prisma/client")
```

Após isso é necessário ajustar o link do banco no arquivo .env na variável DATABASE_UR.
Com isso já deve ser possível importar o banco de dados através do comando:
```bash
prisma db pull
```

Para verificar as tabelas através do prisma utilize:
```bash
npx prisma studio
```

Após a instalação e configuração dos componentes acima listado, comecei a implementação dos módulos, inicialmente pelo módulo prisma, para controlar o acesso aos dados, e após isso comecei a implementação dos modelos que usarão a aplicação, ou seja, usuário, estagiário e solicitação férias.

Até então apenas o módulo de de usuários está funcionando normalmente. Ou seja, todas as rotas implementadas funcionaram de acordo o esperado.
Porém, já na criação do módulo de contratos surgiu um desafio que ainda não consegui resolver.
Aparentemente, o problema é causado pela diferença na definição de contrato feita no arquivo contrato.dto.ts e a definição disponibilizada pelo prisma, contudo eu peguei esta definição no próprio pisma, no arquivo index.d.ts no tipo exportado contratosCreateInput. Desde então, deixei o backende um pouco de lado para focar no frontend do projeto.

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
