# API App

## Development

- `yarn`
- `yarn start`
- API running on defined `PORT` in `.env` or port 8000.

(Remember to run `nvm use` in the root).

## Deployment

- `yarn db:migrate` to update database schema
- `yarn production` to build and run the app

## Scripts

- ### `yarn start`

  Runs the app in dev mode on defined `PORT` in `.env` or port 8000.

- ### `yarn build`

  Builds the app for production to the `build` folder.

- ### `yarn production`

  Builds the app and runs it for production, using the outputted `build` folder.

- ### `yarn lint`

  Runs Eslint validations.

- ### `yarn lint:fix`

  Runs Eslint validation and tries to fix current issues if possible.

- ### `yarn tsc`

  Runs type checks.
