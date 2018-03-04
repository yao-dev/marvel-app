import { Header, Image, Container } from 'semantic-ui-react';

import Layout from 'components/Layout';
import MarvelList from 'components/MarvelList';
import Config from 'helpers/config';

export default () => (
  <Layout title={Config.get('app_name')}>
    <MarvelList page="marvels" displayMode="grid" />
  </Layout>
);
