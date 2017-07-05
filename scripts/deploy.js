'use strict';

const childProcess = require('child_process');
const fs = require('fs');
const path = require('path');
const redis = require('redis');

const [_arg1, _arg2, environment] = process.argv;
const envFile = `.env.${environment}`;
require('dotenv').config({ path: envFile });

const {
  REACT_APP_BACK_END_API_URL,
  REDIS_URL: url,
  REDIS_NAMESPACE,
} = process.env;

const gitSHA = childProcess
  .execSync('git rev-parse HEAD')
  .toString()
  .trim();
const filePath = path.resolve('build/index.html');
const indexHTML = fs.readFileSync(filePath, 'utf8');

const client = redis.createClient({ url });

const latestBuildKey = `${REDIS_NAMESPACE}:latest-build`;
client.incr(latestBuildKey, function(error, reply) {
  const buildNumber = `${reply}-${gitSHA}`;
  const newBuildKey = `${REDIS_NAMESPACE}:${buildNumber}`;
  client.set(newBuildKey, indexHTML);

  console.log(`Build deployed: ${buildNumber}`);
  console.log(
    `Preview it at: ${REACT_APP_BACK_END_API_URL}?build=${buildNumber}`,
  );
  console.log(
    `Activate this build via: yarn activate-build ${environment} ${reply}`,
  );
  client.quit();
});
