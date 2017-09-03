'use strict';

const validEnvironments = ['staging', 'production'];

const [_arg1, _arg2, environment] = process.argv;

module.exports = ({ callback, commandName }) => {
  if (validEnvironments.includes(environment)) {
    const envFile = `.env.${environment}`;
    require('dotenv').config({ path: envFile });
    callback();
  } else {
    console.log(`Invalid environment argument for yarn ${commandName}`);
    console.log('Please try one of the following instead:');
    validEnvironments.forEach(environment => {
      console.log(`$ yarn ${commandName} ${environment}`);
    });
  }
};
