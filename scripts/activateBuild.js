'use strict';

require('dotenv').config();

const redis = require('redis');
const {
  REDIS_URL: url,
  REDIS_NAMESPACE,
} = process.env;

const [_arg1, _arg2, buildNumber] = process.argv;
const buildKey = `${REDIS_NAMESPACE}:${buildNumber}-*`;
const activeBuildKey = `${REDIS_NAMESPACE}:active-build`;
const client = redis.createClient({ url });
client.keys(buildKey, function(error, reply) {
  if (reply.length === 0) {
    console.log('Build not found.');
  } else {
    client.set(activeBuildKey, reply[0]);
  }

  client.quit();
});
