import constants from './constants';

const initialState = {
  marvels: [],
  collections: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.REQUEST:
    case constants.COLLECTIONS_REQUEST:
      return {
        ...state,
        ...action.payload
      };
      break;
    case constants.SUCCESS:
      return {
        ...state,
        marvels: action.payload.results,
      };
      break;
    case constants.COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.payload,
      };
      break;
    case constants.ERROR:
    case constants.COLLECTIONS_ERROR:
      return {
        ...state,
        error: action.payload
      };
      break;
    default:
      return state;
  };
}
