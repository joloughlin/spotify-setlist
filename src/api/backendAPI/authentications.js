import { SubmissionError } from 'redux-form';
import { normalizeAuthentication } from 'utilities/normalizers';
// import { bodyHeaders } from 'utilities/apiHeaders.js'
// import { backendAPIUrl } from 'constants/values'
import loginSuccessFixture from './fixtures/loginSuccess.json';

export const create = async values => {
  // const requestBody = JSON.stringify({ session: values })
  // const response = await fetch(`${backendAPIUrl}/authentications`, {
  // method: 'POST',
  // body: requestBody,
  // headers: bodyHeaders,
  // })
  const response = {
    ok: true,
    json: () => Promise.resolve(loginSuccessFixture),
  };

  let responseBody;
  if (response.ok) {
    responseBody = await response.json();
    return normalizeAuthentication(responseBody);
  } else if (response.status === 422) {
    const body = await response.json();
    throw new SubmissionError({ _error: body });
  }
};
