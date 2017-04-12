'use strict';

require('dotenv').config();

const redis = require('redis');
const {
  REDIS_URL: url,
  REDIS_NAMESPACE,
} = process.env;

const getBuildNumber = build => {
  const buildWithoutNamespace = build.slice(REDIS_NAMESPACE.length + 1);
  return parseInt(buildWithoutNamespace, 10);
};

const client = redis.createClient({ url });
const activeBuildKey = `${REDIS_NAMESPACE}:active-build`;
client.get(activeBuildKey, function(error, activeBuild) {
  client.keys(`${REDIS_NAMESPACE}:*`, function(error, reply) {
    reply
      .sort((a, b) => getBuildNumber(a) > getBuildNumber(b))
      .forEach(build => {
        console.log(build);
      });

    console.log(`\nActive build is: ${getBuildNumber(activeBuild)}`);
    client.quit();
  });
});
