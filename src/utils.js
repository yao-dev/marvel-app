import crypto from 'crypto';
import path from 'path';
import moment from 'moment';
import url from 'url';

import Config from 'helpers/config';

export const formatQuery = (params = {}) => {
  const timestamp = moment().unix(Date.now());
  const apiKey = Config.get('api.key');
  const stringToCrypted = `${timestamp}${apiKey.private}${apiKey.public}`;
  const hash = crypto.createHash('md5').update(stringToCrypted).digest('hex');
  const query = { ts: timestamp, apikey: apiKey.public, hash, ...params };

  return url.format({ query });
};

export const getFormattedUrl = (uri = '', params = {}) => {
  const api = Config.get('api')
  const host = `${api.protocol}${path.join(api.base_url, api.uri, uri)}`;
  const query = formatQuery(params);

  return host + query;
};

export const getIdFromUrl = (url) => {
  const id = parseInt(url.slice(url.lastIndexOf('/') + 1), 10);
  if (!id) return '';
  return id;
}

export default {
  formatQuery,
  getFormattedUrl,
  getIdFromUrl
};
