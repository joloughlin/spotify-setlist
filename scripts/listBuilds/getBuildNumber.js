module.exports = build => {
  const { REDIS_NAMESPACE } = process.env;
  const buildWithoutNamespace = build.slice(REDIS_NAMESPACE.length + 1);
  return parseInt(buildWithoutNamespace, 10) || -1;
};
