import * as api from 'service/api';
import * as config from 'service/config';

//url endpoint call api promise

//consumer key
function fetchImages(endpoint) {
  const url = `${config.apiRoot}?${endpoimt}&`
  return api.request(url)
}
