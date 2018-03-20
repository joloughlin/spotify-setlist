import { SubmissionError } from 'redux-form';
import { backEndAPIUrl } from 'constants/values';
import { bodyHeaders } from 'utils';
import { normalizeAuthentication } from './normalizers';
import loginSuccessFixture from './fixtures/loginSuccess';

export const create = async values => {
  const body = JSON.stringify({ session: values });
  const url = `${backEndAPIUrl}/authentications`;
  const init = {
    method: 'POST',
    body,
    headers: bodyHeaders,
  };

  // const response = await fetch(url, init);

  const response = {
    ok: true,
    json: async () => loginSuccessFixture,
    url,
    init,
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
