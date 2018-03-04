import constants from 'constants/characters';

const initialState = {
  loading: false,
  error: null,
  list: [],
  comics: [],
  series: [],
  events: [],
  stories: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_CHARACTERS_COLLECTIONS_REQUEST:
    case constants.GET_CHARACTERS_REQUEST:
      return {
        ...state,
        ...action.payload,
        loading: true,
        error: null,
      };
    case constants.GET_CHARACTERS_SUCCESS:
      return {
        ...state,
        list: action.payload.results,
        loading: false,
        error: null,
      };
    case constants.GET_CHARACTERS_COLLECTIONS_SUCCESS:
      return {
        ...state,
        collections: action.payload,
        loading: false,
        error: null,
      };
    case constants.GET_CHARACTERS_COLLECTIONS_ERROR:
    case constants.GET_CHARACTERS_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  };
}
