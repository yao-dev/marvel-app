import Layout from 'components/Layout';
import MarvelDetail from 'components/MarvelDetail';
import Config from 'helpers/config';

export default class Marvels extends React.Component {
  render() {
    const { url: { query } } = this.props;
    return (
      <Layout title="Marvel">
        <MarvelDetail id={parseInt(query.id, 10)} />
      </Layout>
    );
  }
}
