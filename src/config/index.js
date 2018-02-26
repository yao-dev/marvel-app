import constants from './constants';

export default {
  app_name: constants.APP_NAME,
  locale: constants.LOCALE,
  api: {
    protocol: 'http://',
    base_url: 'gateway.marvel.com:80',
    uri: '/v1/public/characters',
    key: {
      public: 'API_PUBLIC',
      private: 'API_PRIVATE'
    }
  }
};
