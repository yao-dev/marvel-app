import { bindActionCreators } from 'redux';
import { nextConnect } from '@/configureStore';

const mapStateToProps = (state, ownProps) => {
  const list = ownProps.withCollection ? ownProps.collections : state.characters.list;
  return {
    list,
  };
};

export const Container = (Component) => nextConnect(
  mapStateToProps,
  null,
)(Component);

export default Container;
