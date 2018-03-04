import PropTypes from 'prop-types';
import { Breadcrumb, Container, Image, Header, Segment, Dimmer, Loader } from 'semantic-ui-react';
import { omitBy, get } from 'lodash';

import utils from 'src/utils';
import MarvelCard from 'components/MarvelCard';
import MarvelList from 'components/MarvelList';
import Link from 'components/Link';
import Connect from './container';
import Styled from './style';

/**
 * Component used for list a collection of marvel card
 */
class MarvelDetail extends React.Component {
  componentWillMount() {
    this.props.getCharactersCollections(this.props.id);
  }

  render() {
    const {
      name,
      thumbnail,
      modified,
      description,
      collections
    } = this.props;

    return (
      <Styled.MainContainer>
        <Breadcrumb>
          <Breadcrumb.Section link>
            <Styled.Link href='/'>Home</Styled.Link>
          </Breadcrumb.Section>
          <Breadcrumb.Divider icon='right arrow' />
          <Breadcrumb.Section active>{name}</Breadcrumb.Section>
        </Breadcrumb>
        { this.props.loading ? (
          <Container>
            <Segment>
              <Dimmer active>
                <Loader />
              </Dimmer>
            </Segment>
          </Container>
        ) : (
          <Container>
            <Styled.DetailContainer>
              <div style={{marginRight: '2em'}}>
                <Image src={thumbnail} size='medium' />
              </div>
              <div style={{maxWidth: '50em'}}>
                <Styled.Header as="h1">{name}</Styled.Header>
                <Styled.P>{modified}</Styled.P>
                <Styled.P>{description}</Styled.P>
              </div>
            </Styled.DetailContainer>
            <MarvelList
              title="Comics"
              page="comics"
              collections={collections.comics}
              displayMode="row"
              withCollection
            />
            <MarvelList
              title="Series"
              page="series"
              collections={collections.series}
              displayMode="row"
              withCollection
            />
            <MarvelList
              title="Stories"
              page="stories"
              collections={collections.stories}
              displayMode="row"
              withCollection
            />
            <MarvelList
              title="Events"
              page="events"
              collections={collections.events}
              displayMode="row"
              withCollection
            />
          </Container>
        ) }
      </Styled.MainContainer>
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
  modified: PropTypes.string,
  /**
   * [thumbnail description]
   */
  thumbnail: PropTypes.string,
  /**
   * [collections description]
   */
  collections: PropTypes.object,
  /**
   * [urls description]
   */
  urls: PropTypes.array,
  /**
   * [loading description]
   */
  loading: PropTypes.bool,
};

MarvelDetail.defaultProps = {
  name: '',
  description: '',
  thumbnail: '/static/images/react.png',
  collections: {},
  urls: {},
  loading: false,
};

export default Connect(MarvelDetail);
