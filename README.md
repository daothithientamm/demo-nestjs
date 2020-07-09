<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

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

## Controllers 
 - Resources  - [Docs](https://docs.nestjs.com/controllers)
 - Controllers are responsible for handling incoming requests and returning responses to the client.
 - A DTO (Data Transfer Object) is an object that defines how the data will be sent over the network.
 - To create a controller using the CLI, simply execute the command.
  ```
  $ nest g controller <ObjectName/>
  ```

## Provides
 - A provider is simply a class annotated with an @Injectable() decorator.
 - Many of the basic Nest classes may be treated as a provider – services, repositories, factories, helpers, and so on.
 - <b>Services:</b> will be responsible for data storage and retrieval, and is designed to be used by the `controller`
  - To create a service using the CLI, simply execute the command.
  ```
  $ nest g service <ObjectName>
  ```
  - <b>Dependency injection:</b> the use of the `private` syntax. This shorthand allows us to both declare and initialize the `<Service>` member immediately in the same location

## Modules
 - Each application has at least one module, a <b>root module </b> `app.module.ts`
 - Modules are effect way to organize your components
 - The @Module() is a single object whose properties: 
    * providers: the providers that will be instantiated by the Nest injector and that may be shared at least across this module
    * controllers: the set of controllers defined in this module which have to be instantiated
    * imports: the list of imported modules that export the providers which are required in this module (re-exporting module)
    * exports: the subset of providers that are provided by this module and should be available in other modules which import this module
  - To create a module using the CLI, simply execute the command.
  ```
  $ nest g module <ObjectName>
  ```
  - Shared modules: 
    * Modules are <b>singletons</b> by default.
    * Every module is automatically a shared module. 
    * Once created it can be reused by any module.