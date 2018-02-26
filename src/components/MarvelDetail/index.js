import PropTypes from 'prop-types';
import { Breadcrumb, Container, Image, Header } from 'semantic-ui-react';
import { omitBy, get } from 'lodash';

import utils from 'src/utils';
import MarvelCard from 'components/MarvelCard';
import MarvelList from 'components/MarvelList';
import Link from 'components/Link';
import Connect from './container';

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'row wrap',
    margin: '5em 0em',
  },
  link: {
    color: '#FFF',
    margin: '0.5em 0em',
  },
  text: {
    textAlign: 'left',
  }
};

/**
 * Component used for list a collection of marvel card
 */
class MarvelDetail extends React.Component {
  componentWillMount() {
    this.props.getMarvelCollections({
      comics: this.props.comics.collectionURI,
      series: this.props.series.collectionURI,
      stories: this.props.stories.collectionURI,
      events: this.props.events.collectionURI
    });
  }

  render() {
    const {
      name,
      thumbnail,
      modified,
      description,
      comics,
      series,
      stories,
      events,
      collections
    } = this.props;

    return (
      <div style={styles.container}>
        <Breadcrumb>
          <Breadcrumb.Section link>
            <Link style={styles.link} href='/'>Home</Link>
          </Breadcrumb.Section>
          <Breadcrumb.Divider icon='right arrow' />
          <Breadcrumb.Section active>{name}</Breadcrumb.Section>
        </Breadcrumb>
        <Container>
          <div style={{...styles.container, justifyContent: 'flex-start'}}>
            <div style={{marginRight: '2em'}}>
              <Image src={thumbnail} size='medium' />
            </div>
            <div style={{maxWidth: '50em'}}>
              <Header as='h1' style={styles.text}>{name}</Header>
              <p style={styles.text}>{modified}</p>
              <p style={styles.text}>{description}</p>
            </div>
          </div>
          <MarvelList
            title='Comics'
            collections={get(collections, 'comics', [])}
            displayMode='row'
            withCollection
          />
          <MarvelList
            title='Series'
            collections={get(collections, 'series', [])}
            displayMode='row'
            withCollection
          />
          <MarvelList
            title='Stories'
            collections={get(collections, 'stories', [])}
            displayMode='row'
            withCollection
          />
          <MarvelList
            title='Events'
            collections={get(collections, 'events', [])}
            displayMode='row'
            withCollection
          />
        </Container>
      </div>
    );
  }
};

MarvelDetail.propTypes = {
  /**
   * Marvel identifier
   */
  id: PropTypes.number.isRequired,
  /**
   * [name description]
   */
  name: PropTypes.string,
  /**
   * [description description]
   */
  description: PropTypes.string,
  /**
   * [modified description]
   */
  modified: PropTypes.object,
  /**
   * [thumbnail description]
   */
  thumbnail: PropTypes.string,
  /**
   * [comics description]
   */
  comics: PropTypes.object,
  /**
   * [series description]
   */
  series: PropTypes.object,
  /**
   * [stories description]
   */
  stories: PropTypes.object,
  /**
   * [events description]
   */
  events: PropTypes.object,
  /**
   * [urls description]
   */
  urls: PropTypes.array,
  /**
   * [collections description]
   */
  collections: PropTypes.object
};

MarvelDetail.defaultProps = {
  name: '',
  description: '',
  thumbnail: '/static/images/react.png',
  comics: {},
  series: {},
  stories: {},
  events: {},
  urls: {},
  collections: {},
};

export default Connect(MarvelDetail);
