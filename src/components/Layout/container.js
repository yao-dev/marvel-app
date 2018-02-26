import { bindActionCreators } from 'redux';
import { nextConnect } from '@/configureStore';
import {
  getMarvels
} from 'src/services';

const mapStateToProps = (state, ownProps) => {
  return {
    marvels: state.app.marvels,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getMarvels: bindActionCreators(getMarvels, dispatch),
});

export const Container = (Component) => nextConnect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);

export default Container;
