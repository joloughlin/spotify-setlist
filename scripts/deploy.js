'use strict';

require('dotenv').config();

const childProcess = require('child_process');
const fs = require('fs');
const path = require('path');
const redis = require('redis');
const {
  REDIS_URL: url,
  REDIS_NAMESPACE,
} = process.env;

const gitSHA = childProcess.execSync('git rev-parse HEAD').toString().trim();
const filePath = path.resolve('build/index.html');
const indexHTML = fs.readFileSync(filePath, 'utf8');

const client = redis.createClient({ url });

const latestBuildKey = `${REDIS_NAMESPACE}:latest-build`;
client.incr(latestBuildKey, function(error, reply) {
  const newBuildKey = `${REDIS_NAMESPACE}:${reply}-${gitSHA}`;
  client.set(newBuildKey, indexHTML);
  // prettier-ignore
  console.log(
    `\nBuild deployed. Activate this build via 'npm run activate-build ${reply}'`
  );
  client.quit();
});
