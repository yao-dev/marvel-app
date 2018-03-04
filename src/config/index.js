import constants from './constants';

export default {
  app_name: constants.APP_NAME,
  locale: constants.LOCALE,
  api: {
    protocol: 'http://',
    base_url: 'gateway.marvel.com:80',
    uri: '/v1/public',
    key: {
      public: '96faa867b169d5069a8c74e0690e2d87',
      private: '7ef1bd86c5efcd649cf3031c0defc78f7a6bf80b'
    }
  }
};
