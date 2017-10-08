import config from 'service/config';

//to form apiroot with endpoint with queryparameter

// POST oauth/request_token
const LoginRequest = {
  getFeaturedImages: () => {
    const url = `${config.apiRoot}/oauth/request_token?oauth_callback=http://127.0.0.1&consumer_key=${config.consumerKey}`;
    return url;
  }
}

export default mainRequest;
