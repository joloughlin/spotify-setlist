var REACT_APP = /^REACT_APP_/i
var environmentVariablesToAdd = ['NODE_ENV']
var processEnv = Object
  .keys(process.env)
  .filter(function (key) {
    return REACT_APP.test(key)
  })
  .concat(environmentVariablesToAdd)
  .reduce(function (env, key) {
    return Object.assign({}, env, {
      [key]: JSON.stringify(process.env[key]),
    })
  }, {})

module.exports = { 'process.env': processEnv }
