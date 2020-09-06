[![Codeship Status for qualityshepherd/api-example](https://app.codeship.com/projects/0c9da990-d295-0138-6b73-4247408a535f/status?branch=master)](https://app.codeship.com/projects/408259)

# API Example

Example API tests that:
  - are run via [Jest](https://jestjs.io/)
  - run in parallel (THANKS JEST!)
  - use [axios](https://github.com/axios/axios) for requests
  - are es6y
  - hate semicolons :)

## Setup
> assumes [Git](https://git-scm.com/downloads) and [NodeJS](https://nodejs.org/en) are installed
  - clone 'em: `git@github.com:qualityshepherd/api-example.git`
  - `cd api-example`
  - install dependencies: `npm i`

## Run 'Em
  - `npm test` runs all tests in parallel
  - `npm run watch` runs all tests on save
  - `npm run slow` if you hate running tests in parallel