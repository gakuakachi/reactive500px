import config from 'service/config';

//to form apiroot with endpoint with queryparameter
const mainRequest = {
  getFeaturedImages: (params) => {
    const url = `${config.apiRoot}/photos/?feature=${params}&consumer_key=${config.consumerKey}`;
    return url;
  }
}

export default mainRequest;
