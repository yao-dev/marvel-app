import { Segment, Image, Button } from 'semantic-ui-react';
import { get } from 'lodash';

import Layout from 'components/Layout';
import Link from 'components/Link';
import Config from 'helpers/config';
import utils from 'src/utils';

export default class extends React.Component {
  static async getInitialProps(url) {
    try {
      const res = await fetch(utils.getFormattedUrl(`comics/${url.query.id}`));
      const response = await res.json();
      return { comic: get(response, 'data.results[0]', {}) };
    } catch (e) {
      console.error(e);
    }
  }

  render() {
    const imagePath = get(this.props.comic, 'images[0].path', '');
    const imageExtension = get(this.props.comic, 'images[0].extension', '');
    const image = `${imagePath}.${imageExtension}`;
    const digitalPrice = get(this.props.comic, 'prices[1].price', null);
    const purchaseUrl = get(this.props.comic, 'urls[1].url', '');

    return (
      <Layout title="Comics">
        <Segment>
          <Image src={image} size='medium' centered />
          <p>{this.props.comic.title}</p>
          <p>{this.props.comic.description}</p>
          <Link href={purchaseUrl} target="_blank">
            <Button primary>buy {digitalPrice && `${digitalPrice}$` || ''}</Button>
          </Link>
        </Segment>
      </Layout>
    );
  }
}
