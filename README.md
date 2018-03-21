# Intrepid React Starter Kit - Setting Up A New Project
If you have not already, please install:
* [asdf](https://github.com/asdf-vm/asdf)
* [Yarn](https://yarnpkg.com/en/docs/install)

1. Run the following commands (change `your-app-name` to desired repository name).
    ```
    $ git clone https://github.com/IntrepidPursuits/react-starter-kit.git your-app-name
    $ cd your-app-name
    $ asdf install
    $ cp .env.sample .env.development
    $ cp .env.sample .env.test
    $ yarn install
    $ yarn run initial-setup
    ```
2. Delete the "Intrepid React Starter Kit - Setting Up A New Project" section from this file.

# Project Name
## Local Development Set Up
If you have not already, please install:
* [asdf](https://github.com/asdf-vm/asdf)
* [Yarn](https://yarnpkg.com/en/docs/install)

1. Run the following commands
    ```
    $ asdf install
    $ cp .env.sample .env.development
    $ cp .env.sample .env.test
    $ yarn install
    $ yarn start
    ```
2. Visit [locahost:8080](http://localhost:8080) to see
   your appplication.

This application uses Yarn. **Do not use `npm install` commands**. Instead use the
equivalent [Yarn commands](https://yarnpkg.com/en/docs/usage).

## About this starter kit
* Sets up [React Router V4](https://reacttraining.com/react-router/web/guides/philosophy), [Redux](https://github.com/reactjs/redux), [Redux Form](http://redux-form.com/) and [Recompose](https://github.com/acdlite/recompose) utility functions.

### Testing
This applications uses [Jest](https://facebook.github.io/jest/) for testing. To run the test suite, simply run:

`yarn test`

If you would like coverage information, run:

`yarn test -- --coverage`

[Enzyme](https://github.com/airbnb/enzyme) and [Enzyme matchers](https://github.com/blainekasten/enzyme-matchers) have been installed for testing of React components.

### CSS
* [CSS Modules](https://github.com/css-modules/css-modules) for styling.
* Vendor prefixes are automatically added via [Autoprefixer](https://github.com/postcss/autoprefixer).

### Linting and Code Formatting

* Shows linting errors via [ESLint](https://eslint.org/) using the [eslint-config-react-app](https://github.com/facebookincubator/create-react-app/tree/master/packages/eslint-config-react-app) configuration.
* Consistently formats code when it's commited using [Prettier](https://prettier.io/)

### Deployment

This application's deployment is done through the [Lightning
Strategy Deployment](https://youtu.be/QZVYP3cPcWQ). Two resources are needed for this:

* a Redis server
* a S3 bucket.

To set up staging and production environments simply create `.env.staging` and
a `.env.production` files using `.env.sample` as a template. Fill in the
environment specific variables. It is recommended that you have a seperate S3
bucket and Redis server for each environment. Also, you may optionally change
the value of the `REDIS_NAMESPACE` variable from the default, but it's not
necessary.

Once this is done, you may deploy to staging via:

```
$ yarn deploy-staging
```

or deploy to production via:

```
$ yarn deploy-production
```

At this point your build is deployed, but not activated. To see a list of all
builds and the current activated build for an environment, you can run:

```
$ yarn list-builds environment
```

where `environment` is either `staging` or `production`.

To activate a build, you can run

```
$ yarn activate-build environment build-number
```

where `environment` is either `staging` or `production` and `build-number` is the number of the build that you wish to activate.

To actually serve your activated build, you'll have to setup a server (most likely your backend server) which connects to your Redis server. It should have an endpoint where it:

* retrieves the key of the activated build. This is done by retrieving the value of the `REDIS_NAMESPACE:active-build` key from the Redis server. The `REDIS_NAMESPACE` here is the same as the value in your respective environment specific `.env` file.
* retrieves the HTML of the activated build using the key of the activated build from the Redis server.
* serves the retrieved HTML.
