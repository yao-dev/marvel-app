import { bindActionCreators } from 'redux';
import { filter, get } from 'lodash';
import moment from 'moment';

import { nextConnect } from '@/configureStore';
import {
  getCharactersCollections
} from 'services/characters';

const mapStateToProps = (state, ownProps) => {
  const character = filter(state.characters.list, { id: ownProps.id })[0] || {};

  return {
    name: character.name,
    description: character.description,
    modified: moment(character.modified).format('DD MMMM YYYY'),
    thumbnail: `${get(character.thumbnail, 'path', '')}.${get(character.thumbnail, 'extension', '')}`,
    collections: state.characters.collections,
    urls: character.urls,
    loading: get(state, 'characters.loading', false),
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCharactersCollections: bindActionCreators(getCharactersCollections, dispatch)
  };
};

export const Container = (Component) => nextConnect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default Container;
