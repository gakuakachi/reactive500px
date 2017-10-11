import config from 'service/config';

//to form apiroot with endpoint with queryparameter

// POST oauth/request_token
export const authRequest = {
  requestToken: () => {
    const url = `${config.apiRoot}/oauth/request_token?oauth_callback=http://127.0.0.1&consumer_key=${config.consumerKey}`;
    const params = {
      method: 'POST',
      headers: {
        'Accept': 'application/json'
        // 'Authorization': some token
      },
      body: {

      }
    };
    return { url, params };
  }
}

// export default mainRequest;

// https://api.500px.com/v1/oauth/authorize?oauth_token=fVavefFHSSDRsVTefr6pzsJiehbE38zpacKRe15s

// version    : '1.0A',
// signature  : 'HMAC-SHA1',
// separator  : ', ',

// key        : '',
// secret     : '',
// callback   : ''
