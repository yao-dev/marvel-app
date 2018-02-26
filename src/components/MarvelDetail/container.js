import { bindActionCreators } from 'redux';
import { filter, get } from 'lodash';
import moment from 'moment';
import { nextConnect } from '@/configureStore';
import {
  getMarvelCollections
} from 'src/services';

const mapStateToProps = (state, ownProps) => {
  const marvel = filter(state.app.marvels, { id: ownProps.id })[0] || {};

  return {
    name: marvel.name,
    description: marvel.description,
    modified: moment(marvel.modified).format('DD MMMM YYYY'),
    thumbnail: `${get(marvel.thumbnail, 'path', '')}.${get(marvel.thumbnail, 'extension', '')}`,
    comics: marvel.comics,
    series: marvel.series,
    stories: marvel.stories,
    events: marvel.events,
    urls: marvel.urls,
    collections: state.app.collections
  }
};

const mapDispatchToProps = (dispatch) => ({
  getMarvelCollections: bindActionCreators(getMarvelCollections, dispatch)
});

export const Container = (Component) => nextConnect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default Container;
