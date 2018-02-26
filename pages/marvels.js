import Layout from 'components/Layout';
import MarvelDetail from 'components/MarvelDetail';
import Config from 'helpers/config';

export default ({ url: { query } }) => {
  return (
    <Layout title="Marvel">
      <MarvelDetail
        id={parseInt(query.id, 10)}
      />
    </Layout>
  )
}
