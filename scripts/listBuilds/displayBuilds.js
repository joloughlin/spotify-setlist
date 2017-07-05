'use strict';

module.exports = () => {
  const getBuildNumber = require('./getBuildNumber');

  const redis = require('redis');

  const { REDIS_URL: url, REDIS_NAMESPACE } = process.env;

  const activeBuildKey = `${REDIS_NAMESPACE}:active-build`;

  const client = redis.createClient({ url });

  client.get(activeBuildKey, function(error, activeBuild) {
    client.keys(`${REDIS_NAMESPACE}:*`, function(error, reply) {
      reply
        .sort((a, b) => (getBuildNumber(a) > getBuildNumber(b) ? 1 : -1))
        .forEach(build => console.log(build));

      const activeBuildNumber = activeBuild && getBuildNumber(activeBuild);
      const message = `\nActive build is: ${activeBuildNumber}`;
      console.log(message);
      client.quit();
    });
  });
};
