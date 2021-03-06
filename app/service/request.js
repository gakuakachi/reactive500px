import api from 'service/api';
import config from 'service/config';

//url endpoint call api promise

export function fetchFeatureImages(feature) {
  const url = `${config.apiRoot}?feature=${feature}&page=2&consumer_key=${config.consumerKey}`;
  return api.request(url);
}

export function fetchSpecificImage(photoId) {
  const url = `${config.apiRoot}/photos/${photoId}&consumer_key=${config.consumerKey}`;
  return api.request(url);
}

//fetch('https://api.500px.com/v1/photos?feature=editors&page=2&consumer_key=CywdSnkEZTICzluldXQlmqJ3UmWqjr9so7iGqBuD').then(function(response){return response.json()});


/**

  TODO:
  - POST oauth/access_token
  - OAuth Request Token received using the request_token method. R
  - POST oauth/request_token
  -
 */
