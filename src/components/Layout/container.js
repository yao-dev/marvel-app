import { bindActionCreators } from 'redux';
import { nextConnect } from '@/configureStore';
import {
  getCharacters
} from 'services/characters';

const mapStateToProps = (state, ownProps) => {
  return {
    characters: state.characters.list,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCharacters: bindActionCreators(getCharacters, dispatch),
  };
};

export const Container = (Component) => nextConnect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default Container;
