import { bindActionCreators } from 'redux';
import { nextConnect } from '@/configureStore';

const mapStateToProps = (state, ownProps) => {
  const marvels = ownProps.withCollection ? ownProps.collections : state.app.marvels;
  return {
    marvels,
  };
};

export const Container = (Component) => nextConnect(
  mapStateToProps,
  null,
)(Component);

export default Container;
