## Description

Using Nest as a framework

## Project setup

```bash
$ yarn
```

## Compile and run the project

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

This way you need to have

To start using docker (**recommended way**):

```bash
$ yarn start:docker
```

This will use `docker-compose.yml` configuration to start Postgres and the app itself.

## TODOs

- Add more strict validation
- Add tests
- Use transaction when update config and save user's onboarding data
- Use DB migrations instead of entity models synchronizations
