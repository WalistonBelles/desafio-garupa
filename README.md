# Desafio-garupa


Sobre o projeto:

Optei por utilizar adonis no backend, por ser um framework mais opinado ele já trás um padrão de organização muito agradável e que eu gosto muito.  A maior vantagem que enxergo nele é possuir a grande maioria das funcionalidades já nativa, ou seja, apenas com bibliotecas próprias do adonis, eu já consigo desenvolver muitas coisas, isso me proporciona agilidade e garantia de maior compatibilidade, visto que elas foram desenvolvidas diretamente para ele.

Como ORM eu utilizei o LUCID, um ORM próprio do adonis, e no banco de dados foi utilizado o postgres através de uma imagem no docker. Por ser um projeto simples, não vi a necessidade de utilizar Redis como banco de armazenamento para o token de acesso do usuário.
Os endpoints da api, você encontra logo abaixo.

Já no frontend, eu optei por utilizar o Nuxt, uma framework do Vue. O motivo é muito similar ao da escolha pelo adonis, além dele ser um framework muito completo, ele ainda trás grande parte de seus recursos nativos, sem precisar instalar muitas bibliotecas externas. Como o Nuxt não trás uma sugestão de organização de pastas, utilizei a metodologia do Atomic Design.

Para rodar o projeto é muito simples:

### Rodar a api:

```bash
$ cd backend

# Cria o seu arquivo .env utilizando o .env.example como base

$ docker-compose up -d

$ yarn install

$ node ace migration:run

$ node ace db:seed

$ yarn dev
```

### Rodar o aplicativo web

```bash
$ cd frontend

$ yarn install

$ yarn dev
```




A documentação dos endpoints está descrita logo a baixo.



<br>

# Endpoints da api

## 🕵🏾‍♂️ Autenticação

| METHOD  | ENDPOINT | DESCRIPTION             |
| :-------| :------- | :-----------------------|
| POST    | /login   | Autenticação de usuário |
| POST    | /logout  | Logout da aplicação     |

<br>

## 🕵🏾‍♂️ Usuários

| METHOD  | ENDPOINT | DESCRIPTION               |
| :-------| :------- | :-------------------------|
| POST    | /users   | Criar usuário             |
| PATCH   | /users   | Atualizar usuário         |
| GET     | /users   | Listar todos usuários     |
| GET     | /user/:id| Listar usuário específico |

<br>

## 🕵🏾‍♂️ Cervejas

| METHOD  | ENDPOINT            | DESCRIPTION               |
| :-------| :-------------------| :-------------------------|
| GET     | /beers/:page/:limit | Listar todas cervejas     |

