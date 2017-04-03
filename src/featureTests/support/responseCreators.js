const defaultOptions = { delay: 0 };
export const createOkResponse = (data, options = defaultOptions) => {
  console.log({ data });
  const responseBody = JSON.stringify(data);
  const response = new Response(responseBody, {
    status: 200,
    statusText: 'OK',
    headers: { 'Content-Type': 'application/json' },
  });
  return new Promise(resolve => {
    setTimeout(() => resolve(response), options.delay);
  });
};

export const createNoContentResponse = (options = defaultOptions) => {
  let response = new Response(null, {
    status: 204,
    statusText: 'No Content',
  });
  return new Promise(resolve => setTimeout(response, options.delay));
};

export const createUnprocessableResponse = (
  data = null,
  options = defaultOptions,
) => {
  let response = new Response(data, {
    status: 422,
    statusText: 'Unprocessable Entity',
    headers: data ? { 'Content-Type': 'application/json' } : undefined,
  });
  return new Promise(resolve => setTimeout(response, options.delay));
};

export const createBadRequestResponse = (data, options = defaultOptions) => {
  const responseBody = JSON.stringify(data);
  const response = new Response(responseBody, {
    status: 400,
    statusText: 'Bad Request',
    headers: { 'Content-Type': 'application/json' },
  });
  return new Promise(resolve => {
    setTimeout(() => resolve(response), options.delay);
  });
};
